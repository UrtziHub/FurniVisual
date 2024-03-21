import PageLayout from "@/Layouts/PageLayout";
import {Link} from "@inertiajs/react";
import "../../css/scroll.css"
import UserTable from "@/Components/UserTable";

export default function UserView({auth, users}) {

    if (!users || users.length === 0) {
        return (
            <PageLayout user={auth.user} className="bg-slate-100" headTitle={"User View"}>
                <div className="mx-4 xl:mx-64 py-4">
                    <p>No users found.</p>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout user={auth.user} className="bg-slate-100" headTitle={"User View"}>
            <div className="mx-4 xl:mx-64 py-4">
                <div className="text-9xl font-black font-mono text-center">
                    <span className="bg-clip-text text-transparent bg-center bg-[url('/images/catalogue.webp')]">
                        Users
                    </span>
                </div>
                <section id="myScrollableSection">
                    <UserTable
                        auth={auth}
                        data={users}
                        thead={["admin", "name", "email", "phone"]}
                    ></UserTable>
                </section>
            </div>
        </PageLayout>
    );
}
