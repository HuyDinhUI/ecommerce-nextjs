interface IconProps {
  classname?: string;
  width?: string;
  height?: string;
  color?: string;
}

export const MenuIcon = ({
  classname,
  width = "28",
  height = "18",
  color = "none",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <path
        d="M26.75 0.75L0.750001 0.75"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.75 8.75L0.75 8.75"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.75 16.75H0.75"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CartIcon = ({
  classname,
  width = "16",
  height = "15",
  color = "none",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <path
        d="M1.33287 12.5756C2.26504 13.75 3.99996 13.75 7.4698 13.75H8.0302C11.5 13.75 13.235 13.75 14.1671 12.5756M1.33287 12.5756C0.400708 11.4011 0.720433 9.61813 1.35989 6.05212C1.81463 3.51617 2.042 2.24819 2.90523 1.49909M1.33287 12.5756C1.33287 12.5756 1.33287 12.5756 1.33287 12.5756ZM14.1671 12.5756C15.0993 11.4011 14.7796 9.61813 14.1401 6.05213C13.6854 3.51617 13.458 2.24819 12.5948 1.49909M14.1671 12.5756C14.1671 12.5756 14.1671 12.5756 14.1671 12.5756ZM12.5948 1.49909C11.7316 0.75 10.4978 0.75 8.0302 0.75H7.4698C5.00223 0.75 3.76845 0.75 2.90523 1.49909M12.5948 1.49909C12.5948 1.4991 12.5948 1.49909 12.5948 1.49909ZM2.90523 1.49909C2.90523 1.4991 2.90523 1.49909 2.90523 1.49909Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M5.75 3.75C6.04112 4.91519 6.82665 5.75 7.75 5.75C8.67335 5.75 9.45888 4.91519 9.75 3.75"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const HeartIcon = ({
  classname,
  width = "22",
  height = "22",
  color = "none",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <path
        d="M12.8059 16.6943L12.7597 15.9458L12.8059 16.6943ZM7.33268 6.82443L7.27619 7.5723C7.4795 7.58766 7.68029 7.51958 7.83234 7.38375C7.98439 7.24792 8.07458 7.05605 8.08216 6.8523L7.33268 6.82443ZM16.5254 13.3716L17.264 13.5015L16.5254 13.3716ZM12.7597 15.9458C11.1685 16.0438 9.53441 16.2341 7.93558 16.0486C6.37521 15.8676 4.93302 15.3326 3.75939 14.0189L2.64075 15.0182C4.12626 16.6811 5.95231 17.3286 7.76272 17.5386C9.53468 17.7442 11.3739 17.534 12.852 17.4429L12.7597 15.9458ZM3.75939 14.0189C2.61677 12.7398 2.3858 11.0269 2.96459 9.70578C3.52252 8.43233 4.89677 7.39259 7.27619 7.5723L7.38916 6.07656C4.45773 5.85516 2.43611 7.17414 1.59067 9.10384C0.766087 10.9859 1.12425 13.3206 2.64075 15.0182L3.75939 14.0189ZM12.852 17.4429C13.3848 17.4101 13.9662 17.3726 14.4961 17.265C15.0257 17.1575 15.5862 16.9652 16.0342 16.565L15.0349 15.4464C14.8709 15.5929 14.6086 15.7116 14.1976 15.795C13.7869 15.8784 13.3101 15.9118 12.7597 15.9458L12.852 17.4429ZM17.264 13.5015C17.5206 12.043 17.936 10.239 17.9307 8.45517C17.9254 6.63262 17.4871 4.74539 16.0016 3.08251L14.8829 4.08183C16.0566 5.3956 16.4261 6.88874 16.4307 8.45957C16.4355 10.0691 16.0629 11.6715 15.7867 13.2417L17.264 13.5015ZM16.0016 3.08251C14.4851 1.38493 12.2054 0.766811 10.2426 1.37478C8.23015 1.99813 6.69245 3.85881 6.5832 6.79656L8.08216 6.8523C8.17084 4.46776 9.35835 3.21898 10.6864 2.80762C12.0641 2.38087 13.7403 2.80277 14.8829 4.08183L16.0016 3.08251ZM15.7867 13.2417C15.6912 13.7847 15.6044 14.2548 15.4754 14.6535C15.3464 15.0525 15.199 15.2998 15.0349 15.4464L16.0342 16.565C16.4823 16.1647 16.7363 15.6293 16.9026 15.1152C17.069 14.6007 17.1716 14.0272 17.264 13.5015L15.7867 13.2417Z"
        fill="white"
      />
    </svg>
  );
};
export const UserIcon = ({
  classname,
  width = "14",
  height = "14",
  color = "none",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <circle
        cx="6.74998"
        cy="4.17857"
        r="3.42857"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M12.75 13.6071C12.75 11.7136 10.0637 10.1786 6.75 10.1786C3.43629 10.1786 0.75 11.7136 0.75 13.6071"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const SearchIcon = ({
  classname,
  width = "16",
  height = "16",
  color = "none",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <circle
        cx="7.55834"
        cy="7.55834"
        r="6.80834"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M12.575 12.575L15.0833 15.0834"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ArrowLongIcon = () => {
  return (
    <svg
      width="49"
      height="14"
      viewBox="0 0 49 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 6.75H48.25M48.25 6.75L42.25 0.75M48.25 6.75L42.25 12.75"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
