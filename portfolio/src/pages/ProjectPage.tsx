import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";
import { getAdjacentProjects, getProject } from "../data/projects";
import "./ProjectPage.css";

/** 백틱으로 감싼 구간을 <code> 로 바꿔 렌더한다. 예: "`useMemo`를 활용" */
const withInlineCode = (text: string): React.ReactNode[] =>
  text
    .split(/`([^`]+)`/g)
    .map((part, index) =>
      index % 2 === 1 ? <code key={index}>{part}</code> : part
    );

const ProjectPage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = getProject(slug);
  if (!project) return <Navigate to="/" replace />;

  const adjacent = getAdjacentProjects(project.slug);
  const { troubleshooting, achievements } = project;

  return (
    <main
      className="pp-page"
      style={
        {
          "--accent": project.accent,
          "--hero-height": project.heroHeight,
          "--prev-hover": adjacent?.prev.accent,
          "--next-hover": adjacent?.next.accent,
        } as React.CSSProperties
      }
    >
      <section className="pp-intro">
        <div className="pp-title-box">
          <img
            src={project.logo}
            alt={`${project.name} 로고`}
            className="pp-logo"
          />
          <div>
            <h1 className="pp-title">{project.name}</h1>
            <p>{project.subtitle}</p>
          </div>
        </div>

        <div className="pp-origin">
          <img
            src={project.heroImage}
            alt={project.heroAlt}
            className="pp-hero-img"
          />
          <div className="pp-origin-text">
            <h2 className="pp-sub-title">기획배경</h2>
            <p>{project.background}</p>

            <h2 className="pp-sub-title">기존 서비스와의 차별점</h2>
            {project.differentiators.map((text, index) => (
              <p key={text}>
                {index + 1}. {text}
              </p>
            ))}

            {project.repoUrl && (
              <button
                className="pp-repo-btn"
                onClick={() =>
                  window.open(project.repoUrl, "_blank", "noopener,noreferrer")
                }
              >
                GIT
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="pp-develop">
        <h2 className="pp-title">Features</h2>

        {project.features.map((block) => {
          const image = (
            <img
              className="pp-feature-img"
              src={block.image}
              alt={block.imageAlt}
            />
          );
          const text = (
            <div className="pp-feature-text">
              {block.items.map((item) => (
                <div className="pp-feature-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          );

          return (
            <React.Fragment key={block.heading}>
              <h3 className="pp-feature-heading">{block.heading}</h3>
              <div className="pp-feature-block">
                {block.imageSide === "left" ? (
                  <>
                    {image}
                    {text}
                  </>
                ) : (
                  <>
                    {text}
                    {image}
                  </>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </section>

      {troubleshooting && troubleshooting.length > 0 && (
        <section className="pp-troubleshooting">
          <h2 className="pp-title">Trouble shooting</h2>

          {troubleshooting.map((item) => (
            <article className="pp-ts-item" key={item.title}>
              <h3 className="pp-ts-subtitle">{item.title}</h3>
              <p className="pp-ts-desc">{item.desc}</p>

              <div className="pp-ts-problems">
                {item.problems.map((problem, index) => (
                  <p key={problem}>
                    <strong>문제 {index + 1}</strong> {withInlineCode(problem)}
                  </p>
                ))}
              </div>

              <div className="pp-ts-solutions">
                {item.solutions.map((solution) => (
                  <p key={solution}>➔ {withInlineCode(solution)}</p>
                ))}
              </div>

              <div className="pp-ts-result">
                {item.results.map((result) => (
                  <p key={result}>✅ {withInlineCode(result)}</p>
                ))}
              </div>

              {item.codeImage && (
                <div className="pp-ts-code-img">
                  <img src={item.codeImage} alt={item.codeImageAlt ?? ""} />
                </div>
              )}
            </article>
          ))}
        </section>
      )}

      {achievements && achievements.length > 0 && (
        <section className="pp-achievements">
          <h2 className="pp-title">성과</h2>
          <ul className="pp-achievement-list">
            {achievements.map((item) => (
              <li key={item}>{withInlineCode(item)}</li>
            ))}
          </ul>
        </section>
      )}

      <ProjectDetail {...project.detail} />

      {adjacent && (
        <nav className="pp-next-project">
          <button
            className="pp-nav-btn pp-nav-btn--prev"
            onClick={() => navigate(`/project/${adjacent.prev.slug}`)}
          >
            이전 프로젝트 보기
          </button>
          <button
            className="pp-nav-btn pp-nav-btn--next"
            onClick={() => navigate(`/project/${adjacent.next.slug}`)}
          >
            다음 프로젝트 보기
          </button>
        </nav>
      )}
    </main>
  );
};

export default ProjectPage;
