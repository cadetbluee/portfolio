import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import { projects } from "../data/projects";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<div>홈</div>} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </MemoryRouter>
  );

const firstProject = projects[0];
const secondProject = projects[1];
const lastProject = projects[projects.length - 1];

describe("ProjectPage", () => {
  it.each(projects.map((project) => [project.slug, project] as const))(
    "%s — 데이터에 있는 내용이 모두 렌더된다",
    (_slug, project) => {
      renderAt(`/project/${project.slug}`);

      expect(
        screen.getByRole("heading", { level: 1, name: project.name })
      ).toBeInTheDocument();
      expect(screen.getByText(project.subtitle)).toBeInTheDocument();
      expect(screen.getByText(project.background)).toBeInTheDocument();

      project.features.forEach((block) => {
        expect(screen.getByText(block.heading)).toBeInTheDocument();
        block.items.forEach((item) => {
          expect(screen.getByText(item.title)).toBeInTheDocument();
          expect(screen.getByText(item.body)).toBeInTheDocument();
        });
      });
    }
  );

  it("troubleshooting 이 있으면 해당 섹션을 그린다", () => {
    const project = projects.find((item) => item.troubleshooting);
    if (!project) return;

    renderAt(`/project/${project.slug}`);

    expect(screen.getByText("Trouble shooting")).toBeInTheDocument();
    expect(screen.getByText(project.troubleshooting!.title)).toBeInTheDocument();
    project.troubleshooting!.problems.forEach((problem, index) => {
      expect(screen.getByText(`문제 ${index + 1}`)).toBeInTheDocument();
      expect(screen.getByText(problem, { exact: false })).toBeInTheDocument();
    });
  });

  it("troubleshooting 이 없으면 해당 섹션을 그리지 않는다", () => {
    const project = projects.find((item) => !item.troubleshooting);
    if (!project) return;

    renderAt(`/project/${project.slug}`);

    expect(screen.queryByText("Trouble shooting")).not.toBeInTheDocument();
  });

  it("다음 프로젝트 버튼은 배열의 다음 항목으로 이동한다", () => {
    renderAt(`/project/${firstProject.slug}`);

    fireEvent.click(screen.getByRole("button", { name: "다음 프로젝트 보기" }));

    expect(
      screen.getByRole("heading", { level: 1, name: secondProject.name })
    ).toBeInTheDocument();
  });

  it("첫 프로젝트의 이전 버튼은 마지막 프로젝트로 감싸 돈다", () => {
    renderAt(`/project/${firstProject.slug}`);

    fireEvent.click(screen.getByRole("button", { name: "이전 프로젝트 보기" }));

    expect(
      screen.getByRole("heading", { level: 1, name: lastProject.name })
    ).toBeInTheDocument();
  });

  it("없는 slug 는 홈으로 돌려보낸다", () => {
    renderAt("/project/없는프로젝트");

    expect(screen.getByText("홈")).toBeInTheDocument();
  });
});
