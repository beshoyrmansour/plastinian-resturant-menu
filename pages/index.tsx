import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { checkEnvironment, groupArrayByCategory } from "../helpers";
import {
  Categories,
  Categories_en,
  MenuCategory,
  MenuItem,
  MenuItemOption,
} from "@/models/menu";
import { it } from "node:test";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: { data: MenuItem[] }) {
  const [lang, setLang] = useState("cz");
  const [grouped, setGrouped] = useState<Array<MenuCategory>>([]);
  useEffect(() => {
    if (data.length) setGrouped(groupArrayByCategory(data));

    return () => { };
  }, [data]);

  // console.log({ data, grouped });
  return (
    <>
      <Head>
        <title>Palestinian Restaurant</title>
        <meta name="description" content="Palestinian restaurant menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Fondamento&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.container}>
        <header>
          <Image
            className={styles.logo}
            src={`/logo_h.svg`}
            width="1000"
            height="130"
            alt="Palestinian Restaurant logo"
          />
        </header>
        <div
          className={styles.langSelector}
          onClick={() => {
            setLang((prev) => (prev === "en" ? "cz" : "en"));
          }}
        >
          {lang == "en" ? (
            <img
              src={"./czech-republic.png"}
              width={30}
              height={30}
              alt="change menu language"
            />
          ) : (
            <img
              src={"./united-kingdom.png"}
              width={30}
              height={30}
              alt="change menu language"
            />
          )}
        </div>
        {grouped.length > 0 &&
          grouped.map((cat: MenuCategory) => (
            <div className={styles.menu} key={`menu_category_${cat}`}>
              <h2 className={styles.menu_group_heading}>
                {lang === "en"
                  ? Categories_en[cat.category]
                  : Categories[cat.category]}
              </h2>
              <div className={styles.menu_group}>
                {cat.items.map((item: MenuItem) => (
                  <div
                    className={styles.menu_item_with_option}
                    key={`menu_item_${item.id}`}
                  >
                    <div className={styles.menu_item}>
                      <div className={styles.top_section}>
                        <Image
                          style={{
                            display: item.img === "xxx" ? "none" : "block",
                          }}
                          className={styles.menu_item_image}
                          src={`/Produkty/${item.img}`}
                          alt={
                            item.img === "xxx"
                              ? "  "
                              : item.en_name + "-" + item.cz_name
                          }
                          width={1000}
                          height={1000}
                          priority
                        />
                        {item.isVegan && (
                          <span className={styles.vegan}>
                            {lang === "en" ? "Vegetarian" : "Vegetariánské"}
                          </span>
                        )}
                      </div>
                      <div className={styles.menu_item_text}>
                        <h2 className={styles.menu_item_heading}>
                          <div className={styles.menu_item_heading_name}>
                            <span className={styles.menu_item_name}>
                              {" "}
                              <span className={styles.order_nummber}>
                                {item.number}.
                              </span>{" "}
                              {` ${lang === "en" ? item.en_name : item.cz_name
                                }`}
                            </span>
                            <span className={styles.menu_item_name_sub}>
                              {lang === "en" ? item.cz_name : item.en_name}
                            </span>
                          </div>
                          <div>
                            <span className={styles.menu_item_price}>
                              {!item.options && (
                                <>
                                  <span
                                    className={styles.menu_item_price_amount}
                                  >
                                    {item.price}
                                  </span>
                                  <span
                                    className={styles.menu_item_price_currency}
                                  >
                                    CZK
                                  </span>
                                </>
                              )}
                            </span>
                          </div>
                        </h2>
                        <p className={styles.menu_item_description}>
                          {lang === "en"
                            ? item.en_description
                            : item.cz_description}
                        </p>
                      </div>
                    </div>
                    {item.options && (
                      <div className={styles.menu_item_option_wrapp}>
                        {item.options.map((option: MenuItemOption) => (
                          <>
                            <div className={styles.menu_item_option}>
                              <span className={styles.menu_item_option_name}>
                                {" "}
                                {lang === "en"
                                  ? option.en_name
                                  : option.cz_name}
                              </span>
                              <span className={styles.menu_item_option_price}>
                                <span
                                  className={
                                    styles.menu_item_option_price_amount
                                  }
                                >
                                  {option.price}
                                </span>
                                <span
                                  className={
                                    styles.menu_item_option_price_currency
                                  }
                                >
                                  CZK
                                </span>
                              </span>
                            </div>
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_top}>
          <div className={styles.footer_top_section}>
            <h3>
              {lang === "en" ? "Find" : "Nalézt"}{" "}
              <span>{lang === "en" ? "us" : "nám"}</span>
            </h3>
            <div className={styles.social}>
              <a
                target="_blank"
                href="https://m.facebook.com/profile.php?id=100080996603475"
                className="fa fa-facebook"
              ></a>
              <a
                target="_blank"
                href="https://www.instagram.com/mr.falafelprague/?hl=en"
                className="fa fa-instagram"
              ></a>
            </div>
            <a href="https://maps.app.goo.gl/Lj9YspNJBbt3D8318?g_st=ic">
              {" "}
              <span>Spálená 90/17, 110 00 Nové Město, Czechia</span>
              {/* <div className={styles.map}
                title="Map showing business location."></div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687.0243070229683!2d14.419349692681253!3d50.07944708762389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95aeb20f33f9%3A0x39e0e5ab0d4b3374!2sMr.%20Falafel!5e0!3m2!1sen!2seg!4v1680509042141!5m2!1sen!2seg"
                width="100%"
                height="250"
                style={{
                  marginTop: "1rem",
                  border: "none",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>
          <div className={styles.footer_top_section}>
            <div className={styles.footer_top_section}>
              <h3>
                {lang === "en" ? "Call" : "Zavolejte"}{" "}
                <span>{lang === "en" ? "us" : "nám"}</span>
              </h3>
              <a href="tel:+420602342820">+420 602 342 820</a>
            </div>
            <div className={styles.footer_top_section}>
              <h3>
                {lang === "en" ? "Working" : "Pracovní"}{" "}
                <span>{lang === "en" ? "hours:" : "doba"}</span>
              </h3>
              <table itemProp="openingHours">
                <tbody>
                  <tr>
                    <th className="x2TOCf">
                      {lang === "en" ? "Monday:" : "Pondělí:"}
                    </th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">
                      {lang === "en" ? "Tuesday:" : "Úterý:"}
                    </th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">
                      {lang === "en" ? "Wednesday:" : "Středa:"}
                    </th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">
                      {lang === "en" ? "Thursday:" : "Čtvrtek:"}
                    </th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">
                      {lang === "en" ? "Friday:" : "Pátek:"}
                    </th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">
                      {lang === "en" ? "Saturday:" : "Sobota:"}
                    </th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">
                      {lang === "en" ? "Sunday:" : "Neděle:"}
                    </th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">10:00 AM – 10:00 PM</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <Image
            className={styles.logo}
            src={`/logo_h.svg`}
            width="100"
            height="130"
            alt="Palestinian Restaurant logo"
          />

          <div className={styles.copyright}>
            Copyright © 2023 Palestinian restaurant - All rights reserved <br />{" "}
            Designed By:{" "}
            <a target="_blank" href="http://digitalizers.co/">
              Digitalizers agency
            </a>
          </div>
          <div className={styles.flag_background}>
            <div className={styles.flag_top}></div>
            <div className={styles.flag_middle}></div>
            <div className={styles.flag_triangle}></div>
          </div>
          {/* {lang == 'en' ? 'CZ' : 'EN'} */}
        </div>
      </footer>
    </>
  );
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const base_url = checkEnvironment();
  const newUrl =
    base_url.charAt(base_url.length - 1) === "/"
      ? `${base_url}data.json`
      : `${base_url}/data.json`;
  const res = await fetch(newUrl, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
