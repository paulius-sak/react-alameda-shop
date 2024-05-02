import React from "react";
import { useState } from "react";
import styles from "./Header.module.css";
import instagramBtn from "../../assets/insta-svgrepo-com.svg";
import twitterBtn from "../../assets/twitter-154-svgrepo-com.svg"
import cartBtn from "../../assets/cart-shopping-svgrepo-com.svg"
import burgerBtn from "../../assets/hamburger-menu-more-svgrepo-com.svg"
import closeBtn from "../../assets/close-clean-svgrepo-com.svg"

const Header = () => {
  const [isDisplayMobileMenu, setDisplayMobileMenu] = useState(false);

  const onBurgerBtnClick = () => {
    setDisplayMobileMenu(!isDisplayMobileMenu);
  };

  return (
    <div className={styles.main}>
      <button onClick={onBurgerBtnClick} className={styles.burgerBtn}>
        <img src={isDisplayMobileMenu? closeBtn.src : burgerBtn.src} />
      </button>

      {isDisplayMobileMenu && (
        <div className={styles.mobileMenu}>
          <nav>
            <ul>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Lookbook</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className={styles.linksSocialMediaMobile}>
            <img src={instagramBtn.src} alt="insta" />

            <img src={twitterBtn.src} alt="twitter" />
          </div>
        </div>
      )}


      <div className={styles.nav}>
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Lookbook</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className={styles.logo}>Alameda</div>

      <div className={styles.links}>
        <div className={styles.linksSocialMedia}>
          <img src={instagramBtn.src} alt="insta" />

          <img src={twitterBtn.src} alt="twitter" />
        </div>
        <div className={styles.cart}>
          <a href="#">
            <img src={cartBtn.src} alt="cart" />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Header;
