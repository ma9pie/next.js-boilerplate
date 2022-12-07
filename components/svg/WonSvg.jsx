import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13.8389 12.7204C13.9304 12.3226 14.0192 11.9377 14.1068 11.5515C14.3331 10.5576 14.5593 9.56359 14.7853 8.56944C14.8784 8.16198 15.1897 7.93445 15.535 8.01669C15.8905 8.10019 16.0864 8.45546 16 8.86919C15.9497 9.11105 15.894 9.35151 15.833 9.59059C15.7994 9.72377 15.8123 9.79557 15.966 9.78096C16.091 9.77303 16.2164 9.77303 16.3414 9.78096C16.7243 9.79348 17.0039 10.087 16.9933 10.4615C16.9828 10.8359 16.7106 11.1052 16.3324 11.1094C16.0943 11.1119 15.8557 11.1131 15.6171 11.1094C15.5233 11.1094 15.4799 11.1399 15.4607 11.243C15.4216 11.4546 15.3743 11.665 15.318 11.8725C15.2851 11.9928 15.325 12.0115 15.4251 12.0103C15.729 12.0053 16.0332 12.0065 16.3371 12.0103C16.7239 12.0132 17.002 12.2925 17.002 12.6733C17.002 13.0456 16.7309 13.3295 16.3531 13.3375C15.954 13.3453 15.5546 13.3453 15.1549 13.3375C15.0207 13.3341 14.9715 13.3842 14.9417 13.5203C14.8037 14.1578 14.6574 14.7932 14.5115 15.4286C14.4267 15.7952 14.2155 15.9914 13.9097 15.9997C13.6038 16.0081 13.3794 15.8273 13.2769 15.4679C12.8725 14.0495 12.4692 12.6321 12.0669 11.2154C12.0505 11.1582 12.0489 11.0902 11.9828 11.0284C11.9136 11.2697 11.8479 11.4964 11.7833 11.7235C11.4269 12.9759 11.0713 14.2284 10.7165 15.4808C10.6383 15.758 10.4795 15.9333 10.2131 15.9851C9.87252 16.0515 9.58351 15.8436 9.49434 15.4637C9.34573 14.8291 9.20024 14.1933 9.06415 13.5554C9.02934 13.3938 8.97459 13.3262 8.80721 13.3325C8.41612 13.3475 8.02035 13.345 7.62731 13.3325C7.28746 13.3224 7.04929 13.0841 7.00744 12.74C6.99267 12.5901 7.02587 12.4392 7.10163 12.3119C7.1774 12.1847 7.29127 12.0885 7.42473 12.0391C7.50466 12.0134 7.58811 12.0024 7.6715 12.0065C7.97537 12.0065 8.27964 12.0032 8.58351 12.0065C8.68167 12.0065 8.70709 11.9815 8.67893 11.8755C8.62301 11.6617 8.57412 11.445 8.53267 11.2271C8.51429 11.1298 8.46853 11.1056 8.38484 11.1069C8.14054 11.1099 7.89611 11.1099 7.65156 11.1069C7.27886 11.1019 7.00432 10.8213 7.00197 10.4477C6.99962 10.0845 7.26595 9.79933 7.6277 9.77971C7.74033 9.77386 7.85414 9.77971 7.96716 9.77971C8.20181 9.77971 8.20181 9.77971 8.14628 9.5455C8.097 9.32925 8.04655 9.11341 7.99884 8.89716C7.90498 8.46966 8.08957 8.11313 8.45093 8.02045C8.80095 7.93028 9.11577 8.15905 9.2108 8.57987C9.50855 9.88241 9.80525 11.1851 10.1009 12.4879C10.1158 12.5681 10.146 12.6441 10.1897 12.7112C10.2088 12.6511 10.2288 12.5914 10.2468 12.5309C10.6259 11.1997 11.0048 9.86849 11.3837 8.53729C11.4767 8.21249 11.677 8.02755 11.9468 8.00751C12.2597 7.98455 12.5049 8.1745 12.6066 8.52727C12.8459 9.35945 13.0832 10.192 13.3183 11.025C13.4634 11.5356 13.607 12.047 13.7532 12.5572C13.7689 12.6077 13.77 12.6682 13.8389 12.7204Z"
      fill={props.color}
    />
    <circle
      cx="12.002"
      cy="12"
      r="8.25"
      stroke={props.color}
      strokeWidth="1.5"
    />
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};