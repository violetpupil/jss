import StyledComponentsRegistry from "../lib/AntdRegistry";
import { DefaultLayout } from "../components/layout";

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <StyledComponentsRegistry>
          <DefaultLayout>{children}</DefaultLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
