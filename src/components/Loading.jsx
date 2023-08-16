import "./Loading.scss";

export const LoadingIcon = () => {
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export const LoadingPage = () => {
    return (
        <div className="loading-page">
            <LoadingIcon />
        </div>
    );
};
