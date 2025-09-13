import { useState } from "react";

export const HeaderController = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return {
        isMenuOpen,
        setIsMenuOpen
    }
}
