// import "./btn.css";
// import "./Header.css";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function ClaimDialog({isOpen, setIsOpen}) {

	return (
		// <div style={{position: "absolute", left: 0, top: 0, width: "100vw", height: "100vh"}}>
			<Transition
				show={isOpen}
				enter="transition duration-100 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
					<Dialog onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 overflow-y-auto" style={{zIndex: 101}}>
				<div className="flex items-center justify-center min-h-screen">

					<Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="inline-block h-screen align-middle justify-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>
						<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
							<Dialog.Title>Deactivate account</Dialog.Title>
							<Dialog.Description>
								This will permanently deactivate your account
							</Dialog.Description>

							<p>
								Are you sure you want to deactivate your account? All of your data will
								be permanently removed. This action cannot be undone.
							</p>

							<button onClick={() => setIsOpen(false)}>Deactivate</button>
							<button onClick={() => setIsOpen(false)}>Cancel</button>
						</div>
						</div>
					</Dialog>
			</Transition>
		// </div>
	);
};

export default ClaimDialog;

