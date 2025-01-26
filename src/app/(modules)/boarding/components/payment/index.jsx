import React from "react";
import styles from "./index.module.css";
import Heading from "../header";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
import Divider from "../divider";
import GlobalICONS from "@/lib/utils/icons";
import { useInstitute } from "@/services/context/institute";
import { useWizardStep } from "../../hooks/useWizardStep";
import SubscriptionDetails from "../subscriptionDetails";
import PaymentCompleted from "../paymentCompleted";

const Payment = () => {
    const { instituteSetupPayment } = useInstitute();
    const { currentStep, handleStepChange } = useWizardStep();
    const { onboardedUser } = useInstitute();
    const userStatus = ["INSTITUTE_DETAIL_SETUP", "TEMPLATE_SELECTION_SETUP", "CREDENTIALS_SETUP", "FINISHED"];
    const isPaymentDone = userStatus.includes(onboardedUser.data?.currentOnboardingStep);
    const handlePaymentSubmit = () => {
        const payload = {
            amount: "500",
        };
        console.log("Payment Submit:");
        instituteSetupPayment.execute({
            payload,
            onSuccess: () => {
                onboardedUser.fetch({});
                handleStepChange(currentStep + 1);
            },
        });
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.payment_summary}>
                    <Heading heading={"Order Summary"} subHeading={"It can help you manage and service orders before, during, and after fulfillment."} />
                    {isPaymentDone ? (
                        <PaymentCompleted />
                    ) : (
                        <>
                            {" "}
                            <div className={styles.subscription_info}>
                                <p>A simple start for everyone</p>
                                <h2>
                                    $59.99 <span>/month</span>
                                </h2>
                                <Button tonal={true} fullWidth={true}>
                                    change Plan
                                </Button>
                            </div>
                            <ul className={styles.subscription_details}>
                                <li>
                                    Subscription <span>$85.99</span>
                                </li>
                                <li>
                                    Tax <span>$4.99</span>
                                </li>
                                <Divider />
                                <li>
                                    Total <span>$90.98</span>
                                </li>
                            </ul>
                            <Button loading={instituteSetupPayment.isLoading} onClick={handlePaymentSubmit} iconPosition="right" icon={GlobalICONS.NEXT_ARROW} variant="success" fullWidth={true}>
                                Proceed With Payment
                            </Button>
                            <p>By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable.</p>
                        </>
                    )}
                </div>

                <div className={styles.subscription_plan_container}>
                    <SubscriptionDetails />
                </div>
            </div>
            <div className={styles.button_container}>
                <Button
                    outlined={true}
                    flat={true}
                    buttonContainerClassName={styles.previous_button_container}
                    icon={GlobalICONS.LEFT_ARROW}
                    variant="secondary"
                    onClick={() => handleStepChange(currentStep - 1)}
                >
                    Previous
                </Button>
                <Button
                    tonal={!userStatus.includes(onboardedUser.data?.currentOnboardingStep)}
                    disabled={!userStatus.includes(onboardedUser.data?.currentOnboardingStep)}
                    iconPosition={"right"}
                    icon={GlobalICONS.NEXT_ARROW}
                    onClick={() => handleStepChange(currentStep + 1)}
                >
                    Next
                </Button>
            </div>
        </>
    );
};

export default Payment;
