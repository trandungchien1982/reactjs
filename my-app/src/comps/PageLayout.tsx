function PageLayout(props) {
  return (
    <div className="page-layout" style={{background: "lightgreen"}}>
      {/* Khu vực header */}
      <header className="page-header" style={{background: "cyan"}}>{props.header}</header>
      {/* Khu vực nội dung chính (vẫn có thể dùng children) */}
      <main className="page-main" style={{background: "yellow"}}>{props.children}</main>
      {/* Khu vực footer */}
      <footer className="page-footer" style={{background: "magenta"}}>{props.footer}</footer>
    </div>
  );
}

export default PageLayout;