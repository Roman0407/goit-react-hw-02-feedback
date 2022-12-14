
export const FeedbackSection = ({ title, children }) => {
    return (
        <section style={{ width: "300px", margin: "0 auto", padding: "20px" }}>
            <h2 style={{ marginBottom: "10px" }}>{title}</h2>
            <div>{children}</div>
        </section>)
};
