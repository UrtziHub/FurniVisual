import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateAdressesInformationForm from './Partials/UpdateAdressesInformationForm';
import {Head} from '@inertiajs/react';
import PageLayout from '@/Layouts/PageLayout';

export default function Edit({auth, mustVerifyEmail, status}) {
    return (
        <PageLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
            headTitle={"Profile"}
        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white  shadow sm:rounded-lg">
                        <UpdateAdressesInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                </div>
            </div>
        </PageLayout>
    );
}
