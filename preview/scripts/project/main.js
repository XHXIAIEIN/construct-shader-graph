runOnStartup(async (runtime) => {
  runtime.addEventListener("beforeprojectstart", () =>
    OnBeforeProjectStart(runtime)
  );
});

async function OnBeforeProjectStart(runtime) {
  // Capture shader errors and warnings
  setupShaderErrorCapture();

  if (window !== window.parent) {
    window.parent.postMessage({ type: "projectReady" }, "*");

    window.addEventListener("message", (event) => {
      if (event.data && event.data.type === "updateParam") {
        updateParam(runtime, event.data.index, event.data.value);
      }
    });
  }
}

function updateParam(runtime, index, value) {
  let inst = runtime.objects.Piggy.getFirstInstance();
  inst.effects[0].setParameter(index, value);
}

function setupShaderErrorCapture() {
  // Capture console errors and warnings
  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = function (...args) {
    originalError.apply(console, args);

    // Check if it's a shader-related error
    const message = args.join(" ");
    if (
      message.includes("shader") ||
      message.includes("GLSL") ||
      message.includes("WebGL") ||
      message.includes("WebGPU")
    ) {
      if (window !== window.parent) {
        window.parent.postMessage(
          {
            type: "shaderError",
            message: message,
            severity: "error",
          },
          "*"
        );
      }
    }
  };

  console.warn = function (...args) {
    originalWarn.apply(console, args);

    // Check if it's a shader-related warning
    const message = args.join(" ");
    if (
      message.includes("shader") ||
      message.includes("GLSL") ||
      message.includes("WebGL") ||
      message.includes("WebGPU")
    ) {
      if (window !== window.parent) {
        window.parent.postMessage(
          {
            type: "shaderError",
            message: message,
            severity: "warning",
          },
          "*"
        );
      }
    }
  };

  // Capture WebGL errors
  if (window.WebGLRenderingContext) {
    const originalGetShaderInfoLog =
      WebGLRenderingContext.prototype.getShaderInfoLog;
    WebGLRenderingContext.prototype.getShaderInfoLog = function (shader) {
      const log = originalGetShaderInfoLog.call(this, shader);
      if (log && log.trim() && window !== window.parent) {
        window.parent.postMessage(
          {
            type: "shaderError",
            message: log,
            severity: log.toLowerCase().includes("error") ? "error" : "warning",
          },
          "*"
        );
      }
      return log;
    };

    const originalGetProgramInfoLog =
      WebGLRenderingContext.prototype.getProgramInfoLog;
    WebGLRenderingContext.prototype.getProgramInfoLog = function (program) {
      const log = originalGetProgramInfoLog.call(this, program);
      if (log && log.trim() && window !== window.parent) {
        window.parent.postMessage(
          {
            type: "shaderError",
            message: log,
            severity: log.toLowerCase().includes("error") ? "error" : "warning",
          },
          "*"
        );
      }
      return log;
    };
  }

  // Capture WebGL2 errors
  if (window.WebGL2RenderingContext) {
    const originalGetShaderInfoLog =
      WebGL2RenderingContext.prototype.getShaderInfoLog;
    WebGL2RenderingContext.prototype.getShaderInfoLog = function (shader) {
      const log = originalGetShaderInfoLog.call(this, shader);
      if (log && log.trim() && window !== window.parent) {
        window.parent.postMessage(
          {
            type: "shaderError",
            message: log,
            severity: log.toLowerCase().includes("error") ? "error" : "warning",
          },
          "*"
        );
      }
      return log;
    };

    const originalGetProgramInfoLog =
      WebGL2RenderingContext.prototype.getProgramInfoLog;
    WebGL2RenderingContext.prototype.getProgramInfoLog = function (program) {
      const log = originalGetProgramInfoLog.call(this, program);
      if (log && log.trim() && window !== window.parent) {
        window.parent.postMessage(
          {
            type: "shaderError",
            message: log,
            severity: log.toLowerCase().includes("error") ? "error" : "warning",
          },
          "*"
        );
      }
      return log;
    };
  }
}
