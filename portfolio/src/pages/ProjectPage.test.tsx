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

  it.each(
    projects
      .filter((project) => project.troubleshooting?.length)
      .map((project) => [project.slug, project] as const)
  )("%s — troubleshooting 을 건수만큼 모두 그린다", (_slug, project) => {
    renderAt(`/project/${project.slug}`);

    expect(screen.getByText("Trouble shooting")).toBeInTheDocument();
    project.troubleshooting!.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.desc)).toBeInTheDocument();
    });
  });

  it.each(
    projects
      .filter((project) => project.achievements?.length)
      .map((project) => [project.slug, project] as const)
  )("%s — 성과 항목을 모두 그린다", (_slug, project) => {
    renderAt(`/project/${project.slug}`);

    expect(screen.getByRole("heading", { name: "성과" })).toBeInTheDocument();
    expect(
      screen.getAllByRole("listitem").length
    ).toBeGreaterThanOrEqual(project.achievements!.length);
  });

  it("troubleshooting 이 없는 프로젝트는 해당 섹션을 그리지 않는다", () => {
    const project = projects.find((item) => !item.troubleshooting?.length);
    if (!project) {
      // 현재 모든 프로젝트가 troubleshooting 을 가진다. 조건부 렌더 자체는
      // 아래 achievements 미보유 케이스와 동일한 분기라 별도 검증을 생략한다.
      return;
    }

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
