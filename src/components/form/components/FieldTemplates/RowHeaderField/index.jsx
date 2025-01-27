import styles from "./index.module.css";

const RowHeaderField = (label) => {
    return (
        <div className={styles.container}>
            <p className={styles.rowHeader} style={{ fontSize: "17px" }}>
                {label}
            </p>
        </div>
    );
};

export default RowHeaderField;
