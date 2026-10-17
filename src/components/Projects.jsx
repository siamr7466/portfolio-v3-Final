import React from "react";
import { PROJECTS } from "..";
import { FaGithub } from "react-icons/fa";
import { FiDownload, FiExternalLink } from "react-icons/fi";

const isDownloadLink = (project) => {
  if (project.liveLabel && /download/i.test(project.liveLabel)) return true;
  if (project.downloadUrl) return true;
  if (project.liveUrl && /releases|download|\.apk|\.exe/i.test(project.liveUrl)) return true;
  if (project.technologies && project.technologies.some((t) => /flutter|dart|android|ios|swift|kotlin/i.test(t))) return true;
  return false;
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => {
          const isDownload = isDownloadLink(project);
          const actionLabel = project.liveLabel || (isDownload ? "Download App" : "Visit Website");
          const ActionIcon = isDownload ? FiDownload : FiExternalLink;
          const actionUrl = project.liveUrl || project.downloadUrl;

          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                {/* Upgraded Image with Hover Effect */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 h-37.5 w-37.5 rounded-xl border border-neutral-800 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outline buttons (no solid color fillup) */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-200 hover:border-neutral-500 hover:bg-neutral-800/50 hover:text-white"
                    >
                      <FaGithub className="text-base" />
                      <span>{project.githubLabel || "View Source"}</span>
                    </a>
                  )}

                  {actionUrl && (
                    <a
                      href={actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-purple-500/60 bg-transparent px-4 py-2 text-sm font-medium text-purple-400 transition-all duration-200 hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
                    >
                      <ActionIcon className="text-base" />
                      <span>{actionLabel}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
