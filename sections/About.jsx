import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I am Syed Waseem I</p>
            <p className="subtext">
            I’ve been actively building my frontend and backend development skills to create dynamic and responsive web applications through academic projects and hands-on practice.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Java"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="ReactJs"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="JavaScript"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Tailwind CSS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Rest API"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Figma"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Web Animation"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDI4OGQxIiBkPSJNOS44NiAyQTIuODYgMi44NiAwIDAgMCA3IDQuODZ2MS42OGg0LjI5Yy4zOSAwIC43MS41Ny43MS45Nkg0Ljg2QTIuODYgMi44NiAwIDAgMCAyIDEwLjM2djMuNzgxYTIuODYgMi44NiAwIDAgMCAyLjg2IDIuODZoMS4xOHYtMi42OGEyLjg1IDIuODUgMCAwIDEgMi44NS0yLjg2aDUuMjVjMS41OCAwIDIuODYtMS4yNzEgMi44Ni0yLjg1MVY0Ljg2QTIuODYgMi44NiAwIDAgMCAxNC4xNCAyem0tLjcyIDEuNjFjLjQgMCAuNzIuMTIuNzIuNzFzLS4zMi44OTEtLjcyLjg5MWMtLjM5IDAtLjcxLS4zLS43MS0uODlzLjMyLS43MTEuNzEtLjcxMSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZT0iIzAyODhkMSIvPjxwYXRoIGZpbGw9IiNmZGQ4MzUiIGQ9Ik0xNy45NTkgN3YyLjY4YTIuODUgMi44NSAwIDAgMS0yLjg1IDIuODU5SDkuODZBMi44NSAyLjg1IDAgMCAwIDcgMTUuMzg5djMuNzVhMi44NiAyLjg2IDAgMCAwIDIuODYgMi44Nmg0LjI4QTIuODYgMi44NiAwIDAgMCAxNyAxOS4xNHYtMS42OGgtNC4yOTFjLS4zOSAwLS43MDktLjU3LS43MDktLjk2aDcuMTRBMi44NiAyLjg2IDAgMCAwIDIyIDEzLjY0VjkuODZBMi44NiAyLjg2IDAgMCAwIDE5LjE0IDd6TTguMzIgMTEuNTEzbC0uMDA0LjAwNGwuMDM4LS4wMDR6bTYuNTQgNy4yNzZjLjM5IDAgLjcxLjMuNzEuODlhLjcxLjcxIDAgMCAxLS43MS43MWMtLjQgMC0uNzItLjEyLS43Mi0uNzFzLjMyLS44OS43Mi0uODkiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IiNmZGQ4MzUiLz48L3N2Zz4="
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMjU2IDI1MCI+PHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNDkuNiIgZmlsbD0iIzAxMTc0NyIgcng9IjQyLjUiIHN0cm9rZS13aWR0aD0iNi41IiBzdHJva2U9IiMwMTE3NDciLz48cGF0aCBmaWxsPSIjZjFiZmVlIiBkPSJtMTM0LjU3OCA2NS42NGwtMzEuOTQzIDUyLjcyM2wzNC4xNzUgNTUuOTg1Yy4yMi4zOTIuMjgxLjg1Mi4xNzIgMS4yODhjLS4wNTMuMTg2LS4xNjcuMjMyLS4zNDIuMjM5bC0uMTk0LS4wMDNsLS4yMzYtLjAwNmMtLjEyOCAwLS4yNzEuMDA2LS40My4wMzJoLTI0LjY0bC0uNDg0LS4wMDhjLTEuMzI4LS4wMzUtMi4yODUtLjIyNS0yLjg2OC0xLjE5OWEzMjkyIDMyOTIgMCAwIDAtNi44Ny0xMy4zMDlhNDcwIDQ3MCAwIDAgMC02LjM0LTExLjc2N2wtLjk1OC0xLjcxNGE3ODMgNzgzIDAgMCAxLTcuNjQyLTEzLjkxaC0uMTcyYTUzMiA1MzIgMCAwIDEtNy4xMjcgMTMuNzM4cS0zLjY5NSA2Ljg3LTcuMjk5IDEzLjY1M2E2MDggNjA4IDAgMCAxLTcuMzg0IDEzLjQ4MWMtLjQwNS45MS0xLjA3OCAxLjEtMi4wMTUgMS4xMzFsLS4zOS4wMDZIMzguMDY0bC0uMTAyLjAwM2wtLjMzNi4wM2MtLjE4Ny4wMTEtLjI5OS0uMDI5LS4zMzUtLjMxMWExLjczIDEuNzMgMCAwIDEgLjI1OC0xLjIwMmwzMy4xNDQtNTQuNDRsLTMyLjI4Ni01NC42MXEtLjUxNC0uNjg0LS4xNzItMS4xMTZhMS4yNSAxLjI1IDAgMCAxIDEuMDMxLS40M0g2My40OGEzLjYgMy42IDAgMCAxIDEuNTQ2LjI1OGMuNDEuMjMzLjc2My41NTYgMS4wMy45NDVxMy4wOTEgNi44NyA2Ljg3IDEzLjczOGE3MzcgNzM3IDAgMCAwIDcuNjQyIDEzLjU2N2ExOTIgMTkyIDAgMCAxIDcuMTI3IDEzLjU2N2guMTcyYTUwNyA1MDcgMCAwIDEgNi45NTUtMTMuNzM4cTMuNTE4LTYuNjk4IDcuMjEyLTEzLjQ4MmE2MjEgNjIxIDAgMCAwIDcuMTI3LTEzLjQ4Yy4xMzItLjQyNC4zNjgtLjgwOC42ODctMS4xMTdhMi41IDIuNSAwIDAgMSAxLjM3NC0uMjU4aDIyLjQ5N2EuOTg0Ljk4NCAwIDAgMSAuOTUgMS42MzR6bTUwLjQ3IDExMi40NzNsLTEuMTg0LjAxM2E1My4yIDUzLjIgMCAwIDEtMjIuOTI3LTQuODA4YTM2LjQ1IDM2LjQ1IDAgMCAxLTE2LjA1Ny0xNC41MTJxLTUuNjg3LTkuNDQ1LTUuODM1LTIzLjUzNWwtLjAwNC0uNzY1YTQ0Ljg0IDQ0Ljg0IDAgMCAxIDUuODQtMjIuNDk3YTQyLjg3IDQyLjg3IDAgMCAxIDE2LjQxMi0xNi4xNjZsLjU4OS0uMzJxMTEuMTYtNi4xODMgMjYuOTYyLTYuMTgzbC40Ni4wMDVsLjUyNi4wMTdsLjU5LjAyNmwuNjU2LjAzOGwxLjEwMi4wNzhsMS4yNDguMWwuOTEzLjA4VjU1Ljg1MnEwLTEuMjAxIDEuMDMtMS4yMDJoMjEuNjM5YS45MS45MSAwIDAgMSAxLjAzIDEuMDN2MTAxLjQ5NXEwIDIuNTU3LjE5OCA1LjUwNGwuMzIgNC40NTVsLjE3IDIuNTc3YTEuNzc1IDEuNzc1IDAgMCAxLTEuMDMxIDEuNzE4YTg1LjIgODUuMiAwIDAgMS0xNy4zNDUgNS4xNTFhOTMgOTMgMCAwIDEtMTUuMzAyIDEuNTMzbTkuMjkxLTIxLjI4MnYtNDYuODgzYTE3IDE3IDAgMCAwLTIuODMzLS41MTVhMzQgMzQgMCAwIDAtMy41MjEtLjE3MmEyNi41IDI2LjUgMCAwIDAtMTIuMDIxIDIuNzQ4YTIzLjUgMjMuNSAwIDAgMC05LjAxNiA3LjlxLTMuNDAxIDQuOTc0LTMuNTE3IDEyLjk5bC0uMDA0LjU3N2EzMC4zIDMwLjMgMCAwIDAgMS44MDMgMTAuOTlhMjAuOSAyMC45IDAgMCAwIDQuODEgNy41NTdhMTguMyAxOC4zIDAgMCAwIDcuMjEyIDQuMjkzYTI4LjMgMjguMyAwIDAgMCA4Ljg0NCAxLjM3NXEyLjQwMyAwIDQuNDY1LS4xNzNhMTguNCAxOC40IDAgMCAwIDMuMjQ4LS41NHoiIHN0cm9rZS13aWR0aD0iNi41IiBzdHJva2U9IiNmMWJmZWUiLz48L3N2Zz4="
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
               Currently in India, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
