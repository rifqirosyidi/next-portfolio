import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <DarkModeSwitch
      className="ml-4"
      checked={theme === "dark"}
      sunColor="#9ca3af"
      moonColor="#d1d5db"
      onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      size={20}
    />
  );
};

export default Toggle;
