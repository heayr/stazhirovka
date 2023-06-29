import InputChexboxAddon from "./InputChexboxAddon/InputChexboxAddon";
import styles from "./InputGroup.module.scss";
import InputSelectAddon from "./InputSelectAddon/InputSelectAddon";
import InputTextAddon from "./InputTextAddon/InputTextAddon";

function InputGroup({ children, variant, title, titleDesc, type }) {
  return (
    <div className={type === "checkbox" ? styles.label_checkbox : styles.label}>
      {type === "checkbox" && <InputChexboxAddon title={title} />}
      {(type === "text" || type === "number" || type === "textarea") && (
        <InputTextAddon variant={variant} title={title} titleDesc={titleDesc} />
      )}
      {type === "select" && (
        <InputSelectAddon
          variant={variant}
          title={title}
          titleDesc={titleDesc}
        />
      )}
      {type === "select_secondary" && (
        <InputSelectAddon
          variant={variant}
          title={title}
          titleDesc={titleDesc}
        />
      )}

      <div>{children}</div>
    </div>
  );
}
export default InputGroup;
