import mui from 'material-ui';
import Theme from './Default';

const ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(Theme);
//ThemeManager.setTheme(ThemeManager.types.LIGHT);
//ThemeManager.setTheme(ThemeManager.types.DARK);

export default ThemeManager;
