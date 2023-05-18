import React from 'react'
import styles from './Nav.module.scss'

export const Nav = () => {
  return (
    <>
         <nav className={styles.nav}>

            <ul>
                <li className={styles.categories}>MENU</li>
                <li className={`${styles.li} ${styles.active}`}><a href="/" className={styles.link}>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 17.5C1.45 17.5 0.979333 17.3043 0.588 16.913C0.196 16.521 0 16.05 0 15.5V6.5C0 6.18333 0.0709998 5.88333 0.213 5.6C0.354333 5.31667 0.55 5.08333 0.8 4.9L6.8 0.4C6.98333 0.266667 7.175 0.166667 7.375 0.0999999C7.575 0.0333332 7.78333 0 8 0C8.21667 0 8.425 0.0333332 8.625 0.0999999C8.825 0.166667 9.01667 0.266667 9.2 0.4L15.2 4.9C15.45 5.08333 15.646 5.31667 15.788 5.6C15.9293 5.88333 16 6.18333 16 6.5V15.5C16 16.05 15.8043 16.521 15.413 16.913C15.021 17.3043 14.55 17.5 14 17.5H10V10.5H6V17.5H2Z" fill="#EB1C24"/>
                    </svg>
                    Home</a></li>
                <li className={styles.li}><a href="/" className={styles.link}>
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.11467 5.77778C6.56267 5.23556 7.24089 4.88889 8 4.88889C8.75911 4.88889 9.43733 5.23556 9.88533 5.77778C10.1803 6.13539 10.3675 6.5695 10.4251 7.02946C10.4827 7.48942 10.4083 7.95628 10.2106 8.37557C10.0129 8.79486 9.70008 9.1493 9.30859 9.39754C8.91711 9.64578 8.46311 9.77759 7.99956 9.77759C7.536 9.77759 7.082 9.64578 6.69052 9.39754C6.29904 9.1493 5.98621 8.79486 5.78853 8.37557C5.59084 7.95628 5.51646 7.48942 5.57405 7.02946C5.63164 6.5695 5.81883 6.13539 6.11378 5.77778H6.11467ZM11.3333 7.33333C11.3333 6.77156 11.1947 6.24178 10.9493 5.77778H14.6667C15.0203 5.77778 15.3594 5.91825 15.6095 6.1683C15.8595 6.41835 16 6.75749 16 7.11111V7.55556C16 8.96622 14.928 10.4107 13.0533 10.9191C12.8607 10.573 12.579 10.2848 12.2376 10.0841C11.8961 9.88343 11.5072 9.77767 11.1111 9.77778H10.2667C10.6036 9.46604 10.8723 9.08791 11.0559 8.66721C11.2395 8.24651 11.3339 7.79235 11.3333 7.33333ZM11.1111 10.6667C11.2863 10.6662 11.4599 10.7004 11.6219 10.7672C11.7839 10.834 11.9311 10.9322 12.055 11.0561C12.1789 11.18 12.2771 11.3272 12.3439 11.4892C12.4107 11.6512 12.4449 11.8248 12.4444 12V12.4444C12.4444 14.1964 10.7911 16 8 16C5.20889 16 3.55556 14.1964 3.55556 12.4444V12C3.55509 11.8248 3.58925 11.6512 3.65609 11.4892C3.72293 11.3272 3.82113 11.18 3.94503 11.0561C4.06894 10.9322 4.21611 10.834 4.37809 10.7672C4.54007 10.7004 4.71366 10.6662 4.88889 10.6667H11.1111ZM0 7.55556C0 8.96622 1.072 10.4107 2.94667 10.9191C3.13932 10.573 3.42096 10.2848 3.76243 10.0841C4.10391 9.88343 4.49282 9.77767 4.88889 9.77778H5.73333C5.39642 9.46604 5.1277 9.08791 4.94412 8.66721C4.76054 8.24651 4.66608 7.79235 4.66667 7.33333C4.66667 6.77156 4.80533 6.24178 5.05156 5.77778H1.33333C0.979711 5.77778 0.640573 5.91825 0.390524 6.1683C0.140476 6.41835 0 6.75749 0 7.11111V7.55556ZM6.88889 2.44444C6.88889 1.79614 6.63135 1.17438 6.17293 0.715961C5.71451 0.257539 5.09275 0 4.44444 0C3.79614 0 3.17438 0.257539 2.71596 0.715961C2.25754 1.17438 2 1.79614 2 2.44444C2 3.09275 2.25754 3.71451 2.71596 4.17293C3.17438 4.63135 3.79614 4.88889 4.44444 4.88889C5.09275 4.88889 5.71451 4.63135 6.17293 4.17293C6.63135 3.71451 6.88889 3.09275 6.88889 2.44444ZM14 2.44444C14 1.79614 13.7425 1.17438 13.284 0.715961C12.8256 0.257539 12.2039 0 11.5556 0C10.9072 0 10.2855 0.257539 9.82707 0.715961C9.36865 1.17438 9.11111 1.79614 9.11111 2.44444C9.11111 3.09275 9.36865 3.71451 9.82707 4.17293C10.2855 4.63135 10.9072 4.88889 11.5556 4.88889C12.2039 4.88889 12.8256 4.63135 13.284 4.17293C13.7425 3.71451 14 3.09275 14 2.44444Z" fill="#DCDCDC"/>
                    </svg>
                    Community</a></li>
                <li className={styles.li}><a href="/" className={styles.link}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM4 7.6L7.2 8.8L8.4 12.0016L11.2 4.8L4 7.6Z" fill="#DCDCDC"/>
                    </svg>
                    Discover</a></li>
                <li className={styles.li}><a href="/" className={styles.link}>
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66667 0.444444C2.66667 0.32657 2.71349 0.213524 2.79684 0.130175C2.88019 0.0468253 2.99324 0 3.11111 0H12.8889C13.0068 0 13.1198 0.0468253 13.2032 0.130175C13.2865 0.213524 13.3333 0.32657 13.3333 0.444444V0.888889H15.5556C15.6734 0.888889 15.7865 0.935714 15.8698 1.01906C15.9532 1.10241 16 1.21546 16 1.33333V4C16 4.58937 15.7659 5.1546 15.3491 5.57135C14.9324 5.9881 14.3671 6.22222 13.7778 6.22222H13.0298C12.7121 7.11872 12.1608 7.91412 11.4328 8.52622C10.7048 9.13832 9.82661 9.54492 8.88889 9.704V12.4444H11.5556C11.6734 12.4444 11.7865 12.4913 11.8698 12.5746C11.9532 12.658 12 12.771 12 12.8889V15.5556C12 15.6734 11.9532 15.7865 11.8698 15.8698C11.7865 15.9532 11.6734 16 11.5556 16H4.44444C4.32657 16 4.21352 15.9532 4.13018 15.8698C4.04683 15.7865 4 15.6734 4 15.5556V12.8889C4 12.771 4.04683 12.658 4.13018 12.5746C4.21352 12.4913 4.32657 12.4444 4.44444 12.4444H7.11111V9.704C6.17339 9.54492 5.29517 9.13832 4.56719 8.52622C3.83921 7.91412 3.2879 7.11872 2.97022 6.22222H2.22222C1.63285 6.22222 1.06762 5.9881 0.650874 5.57135C0.234126 5.1546 0 4.58937 0 4V1.33333C0 1.21546 0.0468253 1.10241 0.130175 1.01906C0.213524 0.935714 0.32657 0.888889 0.444444 0.888889H2.66667V0.444444ZM13.3333 4.44444V1.77778H15.1111V4C15.1111 4.35362 14.9706 4.69276 14.7206 4.94281C14.4705 5.19286 14.1314 5.33333 13.7778 5.33333H13.3333V4.44444ZM2.66667 1.77778H0.888889V4C0.888889 4.35362 1.02936 4.69276 1.27941 4.94281C1.52946 5.19286 1.8686 5.33333 2.22222 5.33333H2.66667V1.77778Z" fill="#DCDCDC"/>
                    </svg>
                    Awards</a></li>
                <li className={styles.li}><a href="/" className={styles.link}>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.77778C10.1298 9.77778 12.0667 10.3947 13.4916 11.2631C14.2027 11.6987 14.8107 12.2098 15.2498 12.7653C15.6818 13.3129 16 13.9671 16 14.6667C16 15.4178 15.6347 16.0098 15.1084 16.432C14.6107 16.832 13.9538 17.0969 13.256 17.2818C11.8533 17.6524 9.98133 17.7778 8 17.7778C6.01867 17.7778 4.14667 17.6533 2.744 17.2818C2.04622 17.0969 1.38933 16.832 0.891555 16.432C0.364444 16.0089 0 15.4178 0 14.6667C0 13.9671 0.318222 13.3129 0.750222 12.7653C1.18933 12.2098 1.79644 11.6987 2.50844 11.2631C3.93333 10.3947 5.87111 9.77778 8 9.77778ZM8 0C9.17874 0 10.3092 0.468253 11.1427 1.30175C11.9762 2.13524 12.4444 3.2657 12.4444 4.44444C12.4444 5.62318 11.9762 6.75365 11.1427 7.58714C10.3092 8.42064 9.17874 8.88889 8 8.88889C6.82126 8.88889 5.6908 8.42064 4.8573 7.58714C4.02381 6.75365 3.55556 5.62318 3.55556 4.44444C3.55556 3.2657 4.02381 2.13524 4.8573 1.30175C5.6908 0.468253 6.82126 0 8 0Z" fill="#DCDCDC"/>
                    </svg>
                    Celebs</a></li>
            </ul>

            <ul>
                <li className={styles.categories}>LIBRARY</li>
                <li className={styles.li}><a href="/" className={styles.link}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM11.36 11.36L7.2 8.8V4H8.4V8.16L12 10.32L11.36 11.36Z" fill="#DCDCDC"/>
                    </svg>
                    Recent</a></li>
                <li className={styles.li}><a href="/" className={styles.link}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 13.3995L11.8799 15.8549C12.5904 16.3049 13.4599 15.6397 13.2729 14.7984L12.2445 10.1811L15.6756 7.07027C16.302 6.50289 15.9654 5.42682 15.1427 5.35834L10.6271 4.95726L8.86012 0.594284C8.54225 -0.198095 7.45775 -0.198095 7.13988 0.594284L5.3729 4.94748L0.857274 5.34856C0.034552 5.41703 -0.302016 6.4931 0.324375 7.06049L3.7555 10.1713L2.7271 14.7886C2.54012 15.6299 3.40958 16.2951 4.12012 15.8451L8 13.3995Z" fill="#DCDCDC"/>
                    </svg>
                    Top Rated</a></li>
                <li className={styles.li}><a href="/" className={styles.link}>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11.5818C2.89697 11.5818 1.95467 11.2 1.17309 10.4364C0.39103 9.67273 0 8.73939 0 7.63636C0 6.69091 0.284848 5.84849 0.854545 5.10909C1.42424 4.3697 2.1697 3.89697 3.09091 3.69091C3.3697 2.70909 3.888 1.88485 4.64582 1.21818C5.40315 0.551515 6.27879 0.145455 7.27273 0V5.87273L6.10909 4.74546L5.09091 5.76364L8 8.67273L10.9091 5.76364L9.89091 4.74546L8.72727 5.87273V0C9.97576 0.169697 11.0153 0.730182 11.8458 1.68145C12.6759 2.63321 13.0909 3.75152 13.0909 5.03636C13.9273 5.13333 14.6213 5.49382 15.1731 6.11782C15.7244 6.7423 16 7.47273 16 8.30909C16 9.21818 15.6819 9.99103 15.0458 10.6276C14.4092 11.2638 13.6364 11.5818 12.7273 11.5818H4Z" fill="#DCDCDC"/>
                    </svg>
                    Downloaded</a></li>
            </ul>

            <ul>
                <li className={styles.categories}>CATEGORY</li>
                <li className={styles.li}><a href="/" className={styles.link}>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4 2.9656H9.9312L11.7656 1.1312L10.6344 0L8 2.6344L5.3656 0L4.2344 1.1312L6.0688 2.9656H1.6C0.7176 2.9656 0 3.6832 0 4.5656V13.3656C0 14.248 0.7176 14.9656 1.6 14.9656H14.4C15.2824 14.9656 16 14.248 16 13.3656V4.5656C16 3.6832 15.2824 2.9656 14.4 2.9656Z" fill="#DCDCDC"/>
                    </svg>
                    TV - Show</a></li>
                <li className={styles.li}><a href="/" className={styles.link}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0914 0L12.0133 0.610922L14.1594 3.38356L15.7024 3.07027L15.0914 0ZM9.71064 1.0652L8.16767 1.37066L10.3216 4.13547L11.8567 3.83001L9.71064 1.0652ZM5.8728 1.8171L4.32983 2.13823L6.48372 4.90304L8.01886 4.59758L5.8728 1.8171ZM2.02713 2.60033L1.25956 2.74915C0.852579 2.83046 0.4945 3.06996 0.263947 3.41505C0.0333938 3.76015 -0.0507881 4.18263 0.029885 4.58974L0.335346 6.12488L4.17319 5.36514L2.02713 2.60033ZM0.335346 6.12488V13.9572C0.335346 14.3727 0.500383 14.7711 0.794153 15.0649C1.08792 15.3586 1.48636 15.5237 1.90181 15.5237H14.4335C15.3029 15.5237 16 14.8266 16 13.9572V6.12488H0.335346Z" fill="#DCDCDC"/>
                    </svg>
                    Movie</a></li>
                <li className={styles.li}><a href="/" className={styles.link}>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.630813 11.0062C0.15922 11.6469 -0.0602376 12.4386 0.0142394 13.2307C0.0887163 14.0227 0.451924 14.7597 1.03468 15.3012C1.61744 15.8427 2.37903 16.151 3.1744 16.1673C3.96976 16.1835 4.74332 15.9067 5.34774 15.3894C4.22089 15.1955 3.17485 14.6778 2.33726 13.8995C1.49966 13.1211 0.906728 12.1158 0.630813 11.0062Z" fill="#DCDCDC"/>
                    <path d="M2.74405 6.33463C1.91544 7.25123 1.46762 8.44935 1.4919 9.68474C1.51619 10.9201 2.01074 12.0997 2.87473 12.9831C3.73872 13.8664 4.90709 14.3869 6.14163 14.4386C7.37617 14.4902 8.58392 14.069 9.51863 13.2609C7.72488 13.1712 6.03096 12.4082 4.77513 11.1243C3.5193 9.84033 2.794 8.12993 2.74405 6.33463Z" fill="#DCDCDC"/>
                    <path d="M9.87253 0C11.0838 3.71061e-06 12.2679 0.358994 13.2752 1.03162C14.2825 1.70424 15.0679 2.66033 15.5321 3.77909C15.9963 4.89786 16.1185 6.1291 15.8833 7.3173C15.6481 8.50549 15.0661 9.59733 14.2106 10.4549C13.3552 11.3124 12.2648 11.8972 11.0772 12.1353C9.8896 12.3735 8.65805 12.2543 7.53815 11.7928C6.41824 11.3314 5.46022 10.5484 4.7851 9.54272C4.10999 8.53706 3.74807 7.35387 3.74507 6.14263C3.74308 5.33668 3.9001 4.53826 4.20714 3.79309C4.51418 3.04792 4.96521 2.37064 5.53439 1.80005C6.10358 1.22946 6.77974 0.776753 7.52415 0.467872C8.26856 0.15899 9.06659 -2.46893e-06 9.87253 0Z" fill="#DCDCDC"/>
                    </svg>
                    Anime</a></li>
            </ul>

            <ul>
                <li className={styles.categories}>GENERAL</li>
                <li className={styles.li}><a href="/" className={styles.link}>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1167 9.02944C14.151 8.77244 14.1681 8.50686 14.1681 8.22416C14.1681 7.95002 14.151 7.67588 14.1081 7.41888L15.8472 6.06532C15.9222 6.00355 15.9734 5.91771 15.9921 5.82242C16.0108 5.72713 15.996 5.62829 15.95 5.54274L14.3052 2.69855C14.2568 2.61251 14.1794 2.54639 14.0869 2.51189C13.9944 2.47739 13.8927 2.47675 13.7997 2.51008L11.7523 3.3325C11.3239 3.00696 10.8699 2.73282 10.3644 2.52722L10.056 0.351242C10.0409 0.253178 9.99103 0.163806 9.91558 0.0993573C9.84013 0.0349082 9.74406 -0.000343962 9.64483 2.53013e-06H6.35517C6.14956 2.53013e-06 5.98679 0.145639 5.95253 0.351242L5.64412 2.52722C5.13868 2.73282 4.67607 3.01553 4.2563 3.3325L2.20882 2.51008C2.02035 2.44155 1.80618 2.51008 1.70338 2.69855L0.0671152 5.54274C-0.0356868 5.72264 -0.00141958 5.94538 0.169917 6.06532L1.90898 7.41888C1.86615 7.67588 1.83188 7.95859 1.83188 8.22416C1.83188 8.48973 1.84902 8.77244 1.89185 9.02944L0.152783 10.383C0.0778442 10.4448 0.02664 10.5306 0.00789476 10.6259C-0.0108504 10.7212 0.00402322 10.82 0.0499815 10.9056L1.69481 13.7498C1.79761 13.9382 2.01179 13.9982 2.20026 13.9382L4.24773 13.1158C4.67607 13.4414 5.13011 13.7155 5.63555 13.9211L5.94396 16.0971C5.98679 16.3027 6.14956 16.4483 6.35517 16.4483H9.64483C9.85043 16.4483 10.0218 16.3027 10.0475 16.0971L10.3559 13.9211C10.8613 13.7155 11.3239 13.4414 11.7437 13.1158L13.7912 13.9382C13.9796 14.0068 14.1938 13.9382 14.2966 13.7498L15.9415 10.9056C16.0443 10.7171 16.0014 10.5029 15.8386 10.383L14.1167 9.02944ZM8 11.3082C6.30377 11.3082 4.91594 9.92039 4.91594 8.22416C4.91594 6.52793 6.30377 5.1401 8 5.1401C9.69623 5.1401 11.0841 6.52793 11.0841 8.22416C11.0841 9.92039 9.69623 11.3082 8 11.3082Z" fill="#DCDCDC"/>
                    </svg>
                    Settings</a></li>
                <li className={styles.li}><a href="/" className={styles.link}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM12 11.2L16 8L12 4.8V7.2H5.6V8.8H12V11.2Z" fill="#DCDCDC"/>
                    </svg>
                    Log Out</a></li>
            </ul>

        </nav>
    </>
  )
}