import { Account } from "./Account";
import { OwnAds } from "./OwnAds";

export const Profile = () => {
    return (
        <>
            <section className="bg-light border-dark border-bottom border-5 account-size">
                <div className="bg-success d-flex justify-content-center account-size-child align-items-center border-dark border-bottom border-4 ">
                    <div className="d-flex flex-column account-size-child-child flex-wrap flex-md-row card p-3 h-auto border-dark border border-4 rounded-5 dropShadowCustom">
                        <Account/>
                        <OwnAds/>
                    </div>
                </div>
            </section >
        </>
    );
}