'use client';
import { usePathname } from "next/navigation";
import styleBody from '../style/body.module.scss';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const rotaSelecionada = pathname === '/'

  return (
    <html lang="en">
      <body className={styleBody.body}>
        {children}
      </body>
    </html>
  );
}
