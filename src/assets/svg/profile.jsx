import React from "react";

function ProfilePhoto({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
      className={`${className}`}
    >
      <path
        fill="#4FA274"
        d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z"
      ></path>
      <path
        fill="#4D7F9C"
        fillRule="evenodd"
        d="M14.325 22.76c-3.917 0-7.1-3.183-7.1-7.09 0-3.917 3.183-7.1 7.1-7.1 3.907 0 7.09 3.183 7.09 7.1 0 3.907-3.183 7.09-7.09 7.09z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M18.179 19.503h-7.72a1.062 1.062 0 01-1.07-1.071v-3.403c0-.599.472-1.071 1.07-1.071h7.72c.599 0 1.071.472 1.071 1.071v3.403c0 .599-.473 1.071-1.071 1.071z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#C80B4F"
        fillRule="evenodd"
        d="M7.719 8.15c-.43 0-.83-.221-1.071-.578-.189-.284-.263-.62-.189-.956.063-.336.252-.63.546-.819.21-.147.451-.22.703-.22.43 0 .83.21 1.071.567.19.294.263.63.19.966-.064.336-.253.63-.536.819-.22.136-.462.22-.714.22zM20.291 7.75c-.22 0-.451-.063-.64-.178a1.288 1.288 0 01-.473-1.754c.231-.388.662-.64 1.113-.64.231 0 .452.063.651.178.294.168.504.452.588.777.095.336.042.683-.126.977-.23.399-.661.64-1.113.64z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M14.327 22.97a7.304 7.304 0 01-7.3-7.3 7.28 7.28 0 012.626-5.609.145.145 0 01-.032-.042l-1.26-1.88c-.2.095-.42.147-.64.147-.484 0-.925-.23-1.187-.63-.21-.315-.284-.693-.21-1.071A1.411 1.411 0 017.71 5.44c.483 0 .924.231 1.187.63.21.315.294.694.22 1.072a1.423 1.423 0 01-.472.798l1.27 1.89s0 .01.011.021a7.19 7.19 0 014.4-1.48c1.46 0 2.826.43 3.97 1.176l1.135-1.943a1.432 1.432 0 01-.368-1.86 1.433 1.433 0 011.943-.514c.336.2.567.504.662.872a1.44 1.44 0 01-.147 1.082c-.252.43-.725.703-1.229.703-.189 0-.378-.042-.557-.115l-1.144 1.974a7.308 7.308 0 013.024 5.924c0 4.022-3.266 7.3-7.288 7.3zm5.43-15.576c.157.094.346.147.535.147.378 0 .735-.21.924-.536.147-.252.19-.536.116-.82a1.076 1.076 0 00-.504-.65 1.053 1.053 0 00-.536-.147c-.378 0-.735.21-.924.535a1.068 1.068 0 00.389 1.47zm-1.828 4.159a.212.212 0 01-.115-.032 5.676 5.676 0 00-3.487-1.197c-1.282 0-2.49.42-3.498 1.197a.182.182 0 01-.252-.031c-.052-.074-.042-.19.032-.242a6.011 6.011 0 013.718-1.27c1.354 0 2.636.44 3.707 1.27.074.053.084.168.032.242a.185.185 0 01-.137.063zm-.494.493a.12.12 0 01-.084-.031 5.712 5.712 0 00-3.024-.861 5.659 5.659 0 00-3.025.86.172.172 0 01-.242-.052.172.172 0 01.053-.241 6.048 6.048 0 013.214-.914c1.134 0 2.247.315 3.203.914a.172.172 0 01.052.241.168.168 0 01-.147.084zm-.577.578c-.032 0-.053 0-.074-.01a5.718 5.718 0 00-4.925 0c-.085.031-.19 0-.232-.085-.042-.094 0-.2.084-.241a6.064 6.064 0 012.616-.588c.903 0 1.785.2 2.604.588.084.042.126.147.084.241a.173.173 0 01-.157.095zm-8.55-4.873a1.06 1.06 0 00.305-1.48 1.07 1.07 0 00-1.491-.306c-.242.168-.4.41-.462.693-.053.274 0 .568.168.799.2.304.525.483.892.483.21 0 .42-.063.589-.19zm9.989 11.836h-7.95c-.61 0-1.104-.493-1.104-1.103v-3.507c0-.61.494-1.103 1.103-1.103h7.95c.61 0 1.103.493 1.103 1.103v3.507c0 .61-.493 1.103-1.102 1.103zm-7.95-5.367a.76.76 0 00-.757.757v3.507c0 .42.347.757.756.757h7.95c.42 0 .757-.337.757-.757v-3.507a.753.753 0 00-.756-.757h-7.95zm2.73 1.534a.22.22 0 01-.116-.042c-.598-.483-1.796.02-1.806.02-.095.043-.19 0-.231-.094a.159.159 0 01.094-.22c.053-.032 1.397-.599 2.164.02a.18.18 0 01.031.242c-.042.042-.084.074-.136.074zm4.873 0a.148.148 0 01-.063-.021c-.01 0-1.208-.504-1.817-.021-.073.063-.178.052-.242-.032a.169.169 0 01.022-.241c.777-.62 2.11-.053 2.174-.021.084.031.126.136.094.22a.18.18 0 01-.168.116zm-3.76 2.279a2.326 2.326 0 01-1.355-.41.646.646 0 01-.052-.031c-.095-.042-.137-.137-.105-.22a.173.173 0 01.22-.116c.042.02.074.042.126.073.273.179 1.124.714 2.7-.063a.168.168 0 01.23.084c.053.084.011.19-.073.231-.683.336-1.24.452-1.69.452zm.137-9.316a6.961 6.961 0 00-6.953 6.953c0 3.833 3.12 6.942 6.953 6.942 3.823 0 6.942-3.109 6.942-6.942 0-3.834-3.12-6.953-6.942-6.953z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ProfilePhoto;