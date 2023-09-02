'use client';
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Callout } from "@tremor/react";
import { type } from "os";

type Props = {
    message: string;
    warning?: boolean;
}

function CalloutCard({ message, warning }: Props) {
    return (
        <Callout
            className="mt-4"
            title={message}
            icon={warning ? ExclamationTriangleIcon : CheckCircleIcon}
            color={warning ? "rose" : "teal"}
        />
    );
}

export default CalloutCard;