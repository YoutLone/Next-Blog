import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        YLdev
      </div>
      <div className={styles.text}>
        YLone creative thoughts agency © All rights reserved.
      </div>
    </div>
  )
}

export default Footer