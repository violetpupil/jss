import StyledComponentsRegistry from "../lib/AntdRegistry";
import { DefaultMenu } from "../components/menu";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <DefaultMenu></DefaultMenu>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
