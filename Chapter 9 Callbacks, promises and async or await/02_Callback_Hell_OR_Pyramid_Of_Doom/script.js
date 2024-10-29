function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("SRC: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with src : " + src);
    callback(new Error("src got some error"));
  };
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Hello World ! " + src);
}

//! Pyramid of Doom

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  function goodMorning(error, src) {
    if (error) {
      console.log(error);
      sendEmergencyMessageToCeo();
      return;
    }
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      function goodMorning(error, src) {
        if (error) {
          console.log(error);
          sendEmergencyMessageToCeo();
          return;
        }
        loadScript(
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          function goodMorning(error, src) {
            if (error) {
              console.log(error);
              sendEmergencyMessageToCeo();
              return;
            }
            loadScript(
              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
              function goodMorning(error, src) {
                if (error) {
                  console.log(error);
                  sendEmergencyMessageToCeo();
                  return;
                }
                loadScript(
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
                  function goodMorning(error, src) {
                    if (error) {
                      console.log(error);
                      sendEmergencyMessageToCeo();
                      return;
                    }
                    loadScript(
                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
                      function goodMorning(error, src) {
                        if (error) {
                          console.log(error);
                          sendEmergencyMessageToCeo();
                          return;
                        }
                        loadScript(
                          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
                          function goodMorning(error, src) {
                            if (error) {
                              console.log(error);
                              sendEmergencyMessageToCeo();
                              return;
                            }
                            loadScript(
                              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
                              function goodMorning(error, src) {
                                if (error) {
                                  console.log(error);
                                  sendEmergencyMessageToCeo();
                                  return;
                                }
                                loadScript(
                                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
                                  function goodMorning(error, src) {
                                    if (error) {
                                      console.log(error);
                                      sendEmergencyMessageToCeo();
                                      return;
                                    }
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
