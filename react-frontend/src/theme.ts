export type ThemeType = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
  fonts: {
    main: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export const lightTheme: ThemeType = {
  colors: {
    primary: "#4CAF50",
    secondary: "#FF5722",
    background: "#F5F5F5",
    text: "#212121",
    border: "#E0E0E0",
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
  },
};

export const darkTheme: ThemeType = {
  ...lightTheme,
  colors: {
    primary: "#1E88E5",
    secondary: "#D32F2F",
    background: "#121212",
    text: "#E0E0E0",
    border: "#424242",
  },
};
