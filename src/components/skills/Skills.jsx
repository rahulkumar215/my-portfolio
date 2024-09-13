import React from "react";
// import Frontend from "./Frontend";
// import Backend from "./Backend";
import "./Skills.module.scss";
import { ReactComponent as SheetsIcon } from "../../assets/icons/sheets.svg";
import { ReactComponent as AppScriptIcon } from "../../assets/icons/appsscript.svg";
import { ReactComponent as DriveIcon } from "../../assets/icons/drive.svg";
import { ReactComponent as HtmlIcon } from "../../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as DocsIcon } from "../../assets/icons/docs.svg";
import { ReactComponent as FormsIcon } from "../../assets/icons/forms.svg";
import { ReactComponent as GmailIcon } from "../../assets/icons/gmail.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as SassIcon } from "../../assets/icons/sass.svg";
import { ReactComponent as SitesIcon } from "../../assets/icons/sites.svg";
import styles from "./Skills.module.scss";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className={`${styles.skillsContainer} container grid`}>
        <Skill name="HTML" icon={<HtmlIcon className="skill-icon" />} />
        <Skill name="CSS" icon={<CssIcon className="skill-icon" />} />
        <Skill
          name="JAVASCRIPT"
          icon={<JavaScriptIcon className="skill-icon" />}
        />
        <Skill name="REACT" icon={<ReactIcon className="skill-icon" />} />
        <Skill name="SASS" icon={<SassIcon className="skill-icon" />} />
        <Skill name="DOCS" icon={<DocsIcon className="skill-icon" />} />
        <Skill name="DRIVE" icon={<DriveIcon className="skill-icon" />} />
        <Skill name="SITES" icon={<SitesIcon className="skill-icon" />} />
        <Skill name="GMAIL" icon={<GmailIcon className="skill-icon" />} />
        <Skill name="FORMS" icon={<FormsIcon className="skill-icon" />} />
        <Skill name="SHEETS" icon={<SheetsIcon className="skill-icon" />} />
        <Skill name="CALENDAR" icon={<CalendarIcon className="skill-icon" />} />
        <Skill
          name="APP SCRIPT"
          icon={<AppScriptIcon className="skill-icon" />}
        />
      </div>
    </section>
  );
};
export default Skills;
