import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.page}>
      <nav>
        <ul>
          <li>
            <Link href="/bike_bucket">Выбрать байк</Link>
          </li>
          <li>
            <Link href="/time_booking">Выбрать время</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
