import React, {useRef, useState} from 'react';
import {ArrowDown, ArrowUp, BallIcon, CheckmarkIcon} from "../../assets";

interface ListItem {
    label: string;
    value: string;
    icon: React.ReactElement;
    selected?: boolean;
}

const MultipleSelect = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [list, setList] = useState<ListItem[]>([
        {label: 'Sample 1', value: 'sample1', icon: <BallIcon/>},
        {label: 'Sample 2', value: 'sample2', icon: <BallIcon/>},
    ]);

    const handleSelectItem = (item: ListItem) => {
        setList((prevState) => {
            return prevState.map((elem) => {
                if (elem.value === item.value) {
                    return { ...elem, selected: !elem.selected };
                }
                return elem;
            });
        });
    };

    const addItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const value = event.currentTarget.value;
            if (value && !list.some((opt) => opt.value === value)) {
                setList((prevState) => [...prevState, {label: value, value: value, icon: <BallIcon/>}]);
            }
            event.currentTarget.value = '';
            setIsOpen(true);
        }
    };

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        if (wrapperRef.current && wrapperRef.current.contains(event.relatedTarget as Node)) {
            return;
        }
        setIsOpen(false);
    }

    return (
        <div tabIndex={1} className="select-wrapper" onBlur={handleBlur} ref={wrapperRef}>
            <input
                type="text"
                placeholder="Add an item..."
                onKeyDown={(e) => addItem(e)}
                onClick={toggleList}
                className={`select ${isOpen ? 'focus-select' : ''}`}
            />
            <span className="arrow-icon" onClick={toggleList}>
                {isOpen ? <ArrowUp size="22" color="#A0A0A0"/> : <ArrowDown size="22" color="#A0A0A0"/>}
            </span>
            {isOpen && (
                <div className="list">
                    {list.map((item) => (
                        <div key={item.value} className={`list-item ${item.selected ? 'selected-color' : ''}`} onClick={() => handleSelectItem(item)}>
                            <div className="item"><span className="item-title">{item.label}</span> {item.icon}</div>
                            {item.selected && <CheckmarkIcon size="16" color="#6495EDFF"/>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultipleSelect;
