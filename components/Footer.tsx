import { SITE } from "../config";
import styles from "../styles/Layout.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Maintained by the OpenNext community</span>
      <div>
        <a target="_blank" href="https://www.zhcndoc.com">
          简中文档
        </a>
        <a target="_blank" href="https://beian.miit.gov.cn" rel="noopener noreferrer">
          沪ICP备2024070610号-3
        </a>
      </div>
    </footer>
  );
}
