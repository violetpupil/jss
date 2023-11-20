import Link from "next/link";
import StyledComponentsRegistry from "../lib/AntdRegistry";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <nav>
            <Link href="/example">示例</Link>
            <br></br>
            <Link href="/antd">antd</Link>
          </nav>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
