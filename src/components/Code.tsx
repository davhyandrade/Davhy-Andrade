export default function Code() {
  return (
    <div className="code-field">
      <div className="code-header">
        <div className="position">
          <div>
            <span>index.html</span>
          </div>
        </div>
      </div>
      <code className="position">
        <pre>
          <span className="code-color-white">
            &lt;
            <span className="code-color-pink">script</span>
            <span className="code-color-attribute"> type</span>=
            <span className="code-color-text">&quot;text/javascript&quot;</span>
            &gt;
          </span>
        </pre>
        <pre>
          <span className="code-color-white">
            <span className="code-color-pink">
              {'    '}function
              <span className="code-color-attribute"> handleProgrammer</span>
            </span>
            &#40;&#41; &#123;
          </span>
        </pre>
        <pre>
          <span className="code-color-white">
            <span className="code-color-pink">{'       '}if </span>
            <span className="code-color-white">
              &#40;<span className="code-color-white">isProgramming</span>&#41; &#123;
            </span>
          </span>
        </pre>
        <pre>
          <span className="code-color-white">
            <span className="code-color-purple">
              {'          '}console.
              <span className="code-color-attribute">
                log&#40;<span className="code-color-text">&quot;Hello World&quot;</span>&#41;
              </span>
            </span>
            &#59;
          </span>
        </pre>
        <pre>
          <span className="code-color-white">{'      '}&#125;</span>
        </pre>
        <pre>
          <span className="code-color-white">{'    '}&#125;</span>
        </pre>
        <pre>
          <span className="code-color-white">
            <span className="code-color-attribute">{'    '}handleProgrammer</span>
            &#40;&#41;&#59;
          </span>
        </pre>
        <pre>
          <span className="code-color-white">
            &lt;&frasl;<span className="code-color-pink">script</span>&gt;
          </span>
        </pre>
      </code>
    </div>
  );
}
