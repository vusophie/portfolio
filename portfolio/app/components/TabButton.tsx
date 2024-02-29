import React from 'react'

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white border-b border-purple' : 'text-[#ADB7BE] border-b border-purple-500'
  return (                
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}

export default TabButton;
