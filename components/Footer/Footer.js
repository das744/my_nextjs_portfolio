import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Designed and Created By AD &copy;
        <script>
          document.write(new Date().getFullYear());
        </script>
        | All Rights Reserved
      </p>
   
    </div>
  )
}

export default Footer