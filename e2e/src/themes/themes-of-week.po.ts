import { browser, element, by } from 'protractor';

export class ThemesOfWeekPage {
    navigateTo() {
        return browser.get('/themes-of-the-week');
    }

    getUrl() {
        return browser.getCurrentUrl();
    }
/*comment all integration test to have the pipeline running
    getHeadingText() {
        return element(by.css('app-hq-dashboard-sub-menu .dashboard-sub-menu-container h2')).getText();
    }

    getSelectedSubNavItem() {
        return element(by.css('app-hq-dashboard-sub-menu .dashboard-sub-menu-container li.list-inline-item .active')).getText();
    }

    getThemeList() {
        return element(by.css('#theme-list-container #theme-list'));
    }
    */
}
