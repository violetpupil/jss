import StyledComponentsRegistry from "../lib/AntdRegistry";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <nav>
            <a href="/example">示例</a>
            <br></br>
            <a href="/antd">antd</a>
          </nav>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
