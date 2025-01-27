import { NotificationProvider } from "./notification";
import { HiringProvider } from "./hiring";
import { LoadingProvider } from "./loading";
import { TemplateProvider } from "./template";
import { ProfessionalProvider } from "./professional";

const ContextProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <NotificationProvider>
                <TemplateProvider>
                    <HiringProvider>
                        <ProfessionalProvider>{children}</ProfessionalProvider>
                    </HiringProvider>
                </TemplateProvider>
            </NotificationProvider>
        </LoadingProvider>
    );
};
export default ContextProviders;
