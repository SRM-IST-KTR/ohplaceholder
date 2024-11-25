import React from "react";

const Tracks = () => {
    return (
        <>
            <div className="mt-[30px] flex flex-col">
                
                <div className="text-center align-middle justify-center lg:text-[119px] md:text-[100px] text-[70px] font-bold mb-[50px] text-[#FCF961] [text-shadow:0_7px_10px_rgb(255_255_255/_90%)]">TRACKS</div>
                    <div className="grid grid-cols-[303px] gap-[113px] justify-center align-middle items-center">

                    <div class="bg-[#AB7A57] h-[318px] rounded-[20px] shadow-[0_15px_30px_-15px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row relative delay-100 hover:shadow-[0_0_30px_0_rgba(255,255,255,1)] overflow-hidden hover:h-[700px] text-center transition-height lg:hover:w-[700px] lg:hover:h-[318px]">
                        <div className="flex flex-col h-[318px] w-[303px] items-center justify-center align-middle p-[20px]">
                            <div className="mt-[30px]">
                                <div>
                                <img src="../../AIML_icon.png" class="w-[177px] h-[177px]"></img>
                                </div>
                                <div className="text-[42px] text-[#EBE100] text-center font-semibold mb-[10px]">AI/ML</div>
                            </div>
                        </div>
                            
                            
                            <div className="overflow-hidden lg:ml-[150px] p-[20px] align-middle justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>

                    <div className="bg-[#AB7A57] h-[318px] rounded-[20px] shadow-[0_15px_30px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center relative delay-100 hover:shadow-[0_0_30px_0_rgba(255,255,255,1)] p-[20px] overflow-hidden hover:h-[700px] text-center transition-height">
                        <div className="mt-[30px]">
                            <img src="../../healthcare_icon.png" class="w-[152px] h-[152px]"></img>
                        </div>
                        <div className="text-[42px] text-[#EBE100] text-center font-semibold mb-[50px]">Healthcare</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>

                    <div class="bg-[#AB7A57] h-[318px] rounded-[20px] shadow-[0_15px_30px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center relative delay-100 hover:shadow-[0_0_30px_0_rgba(255,255,255,1)] overflow-hidden hover:h-[700px] text-center transition-height">
                        <div className="mt-[15px]">
                            <img src="../../open_innovation_icon.png" className="w-[201px] h-[201px]"></img>
                        </div>
                        <div className="text-[42px] text-[#EBE100] text-center leading-[45px] font-semibold mb-[30px]">Open Innovation</div>
                        <div className="p-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>

                    <div class="bg-[#AB7A57] h-[318px] rounded-[20px] shadow-[0_15px_30px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center relative transition ease-in-out delay-100 hover:shadow-[0_0_30px_0_rgba(255,255,255,1)]">
                        <div className="mt-[30px]">
                        <img src="..\..\megaphone_icon.png" className="w-[176px] h-[176px]"></img>
                        </div>
                        <div className="text-[42px] text-[#EBE100] text-center font-semibold mt-[30px] absolute bottom-[30px]">TBA</div>
                    </div>

                    <div class="bg-[#AB7A57] h-[318px] rounded-[20px] shadow-[0_15px_30px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center relative transition ease-in-out delay-100 hover:shadow-[0_0_30px_0_rgba(255,255,255,1)]">
                        <div className="mt-[30px]">
                        <img src="..\..\megaphone_icon.png" className="w-[176px] h-[176px]"></img>
                        </div>
                        <div className="text-[42px] text-[#EBE100] text-center font-semibold mt-[30px] absolute bottom-[30px]">TBA</div>
                    </div>

                    <div className="bg-[#AB7A57] h-[318px] rounded-[20px] shadow-[0_15px_30px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center relative transition ease-in-out delay-100 hover:shadow-[0_0_30px_0_rgba(255,255,255,1)]">
                        <div className="mt-[30px]">
                        <img src="..\..\megaphone_icon.png" className="w-[176px] h-[176px]"></img>
                        </div>
                        <div className="text-[42px] text-[#EBE100] text-center font-semibold mt-[30px] absolute bottom-[30px]">TBA</div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Tracks;