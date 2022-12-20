import CardStackCard from "./CardStackCard";


export default function CardStack() {
	const cardClass = {
		"card1": "h-96 w-80 sm:h-96 xl:w-full md:h-96 md:w-96 xl:h-full bg-neutral-800 hover:bg-blue-800 rounded-lg p-4 lg:p-10 xl:shadow-lg border border-neutral-700 xl:hover:z-50 xl:hover:scale-105 transition-all duration-300 overflow-hidden",
		"card2": "h-96 w-80 sm:h-96 xl:w-full md:h-96 md:w-96 xl:h-full bg-neutral-800 hover:bg-blue-800 rounded-lg p-4 lg:p-10 xl:shadow-lg xl:translate-y-10 border border-neutral-700 xl:hover:z-50 xl:hover:scale-105 transition-all duration-300 overflow-hidden",
		"card3": "h-96 w-80 sm:h-96 xl:w-full md:h-96 md:w-96 xl:h-full bg-neutral-800 hover:bg-blue-800 rounded-lg p-4 lg:p-10 lg:shadow-lg xl:translate-x-1/2 border border-neutral-700 xl:z-40 xl:hover:scale-105 transition-all duration-300 overflow-hidden",
		"hidden": "h-96 w-80 sm:h-96 xlm :w-full md:h-96 md:w-96 xl:h-full hidden xl:flex rounded-lg p-4 lg:p-10 overflow-hidden",
		"card4": "h-96 w-80 sm:h-96 xl:w-full md:h-96 md:w-96 xl:h-full bg-neutral-800 hover:bg-blue-800 rounded-lg p-4 lg:p-10 xl:shadow-lg xl:-translate-y-10 border border-neutral-700 xl:hover:z-50 xl:hover:scale-105 transition-all duration-300 overflow-hidden",
		"card5": "h-96 w-80 sm:h-96 xl:w-full md:h-96 md:w-96 xl:h-full bg-neutral-800 hover:bg-blue-800 rounded-lg p-4 lg:p-10 xl:shadow-lg border border-neutral-700 xl:hover:z-50 xl:hover:scale-105 transition-all duration-300 overflow-hidden",
		"rainbow": "h-96 w-80 sm:h-96 xl:w-full md:h-96 md:w-96 xl:h-full rounded-lg p-4 lg:p-10 lg:shadow-lg xl:translate-x-1/2 border border-neutral-700 xl:z-40 xl:hover:scale-105 transition-transform  bg-neutral-800  xl:bg-gradient-to-r xl:from-blue-500 xl:to-orange-500 xl:via-blue-500 xl:animate-gradient-x xl:bg-cover xl:bg-center xl:shadow-lg xl:duration-300 overflow-hidden",
	}

	return (
		<>
			<div className="bg-neutral-900">
				<div className="xl:mx-40">

					<div className="flex xl:grid xl:grid-cols-2 gap-2 md:gap-4 overflow-x-auto scroll-hide p-2 md:p-10 xl:p-20">

						{/* CARD 1 */}
						<div>
							<CardStackCard 
							card_class={cardClass.card1}
							title={'Asset Tracking & Inventory Management'} 
							msg={
								'Do do anim sint adipisicing duis cupidatat. Ut anim consequat culpa cupidatat et esse ex ullamco non dolor reprehenderit exercitation aliqua eiusmod. Qui veniam enim enim minim occaecat fugiat fugiat eu. Anim exercitation aliqua aliquip dolore ex ad reprehenderit magna Lorem amet ut sint.'
							} 
							/>
						</div>

						<div>
							{/* CARD 2 */}
							<CardStackCard 
							card_class={cardClass.card2}
							title={'Video Surveillance'} 
							msg={
								'Do do anim sint consfugiat. Laboris laboris id commodo ullamco Lorem amet velit duis eu mollit adipisicing duis cupidatat. Ut anim consequat culpa cupidatat et esse ex ullamco non dolor reprehenderit exercitation aliqua eiusmod. Qui veniam enim enim minim occaecat fugiat fugiat eu. Anim exercitation aliqua aliquip dolore ex ad reprehenderit magna Lorem amet ut sint.'
							} 
							/>
						</div>

						<div className="xl:z-50">
							{/* CARD 3 */}
							<CardStackCard 
							card_class={cardClass.card3}
							title={'Rugged Computing'} 
							msg={
								'Do do anim sint consequat est ad qui consectetur nostrud. Duis minim non laborum nulla fugiat. Laboris laboris id commodo ullamco Lorem amet velit duis eu mollit adipisicing duis cupidatat. Ut anim consequat culpa cupidatat et esse ex ullamco non dolor reprehenderit exercitation aliqua eiusmod. Qui veniam enim enim minim occaecat fugiat fugiat eu. Anim exercitation aliqua aliquip dolore ex ad reprehenderit magna Lorem amet ut sint.'
							} 
							/>
						</div>

						<div className="hidden xl:flex">
							{/* CARD HIDDEN */}
							<CardStackCard 
							card_class={cardClass.hidden}
							title={''} 
							msg={
								''
							} 
						/>
						</div>

						<div>
							{/* CARD 4 */}
							<CardStackCard 
							card_class={cardClass.card4}
							title={'Wearable Technology'} 
							msg={
								'Do do anim sint mollit adipisicing duis cupidatat. Ut anim consequat culpa cupidatat et esse ex ullamco non dolor reprehenderit exercitation aliqua eiusmod. Qui veniam enim enim minim occaecat fugiat fugiat eu. Anim exercitation aliqua aliquip dolore ex ad reprehenderit magna Lorem amet ut sint.'
							} 
						/>
						</div>

						<div>
							{/* CARD 5 */}
							<CardStackCard 
							card_class={cardClass.card5}
							title={'RFID & Barcode Scanning'} 
							msg={
								'Do do anim sint consequat est ad qui consectetur nostrud. Duis minim non laborum nulla fugiat. Laboris laboris id commodo ullamco Lorem amet velit duis eu mollit adipisicing duis cupidatat. Ut anim consequat culpa cupidatat et esse ex ullamco non dolor reprehenderit exercitation aliqua eiusmod. Qui veniam enim enim minim occaecat fugiat fugiat eu. Anim exercitation aliqua aliquip dolore ex ad reprehenderit magna Lorem amet ut sint.'
							} 
						/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}