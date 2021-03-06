// Import React
import React from 'react';
import {AboutMe, Formidable } from './aboutme';
import { A11yIntro, Why, WhyBusiness1, WhyBusiness2, WhyBusiness3, A11yResources } from './aboutA11y'
// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Cite,
	CodePane,
	ComponentPlayground,
	Deck,
	Heading,
	Image,
	Layout,
	Link,
	Fill,
	ListItem,
	List,
	Notes,
	Quote,
	Slide,
	Text,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default');

const images = {
	me: require('../assets/KnittingCodeMonkey.jpg'),
	github1: require('../assets/github1.png'),
	github2: require('../assets/github2.png'),
	github3: require('../assets/github3.png'),
	logo: require('../assets/formidable-logo.svg'),
	markdown: require('../assets/markdown.png'),
	mhpNuke: require('../assets/ManhattanHardcoreProject.png'),
	reactWeek: require('../assets/ReactWeek.png'),
	justAHeader: require('../assets/justAHeader.png'),
	importantRabbits: require('../assets/ImportantRabbits.png'),
	beKind: require('../assets/beKind.png'),
	livingStyleGuide: require('../assets/LivingStyleGuide.png'),
	iconFont: require('../assets/IconFont.png'),
	waitWhat: require('../assets/waitWhat.png'),
	famous: require('../assets/famous.jpg'),
	accessibilityGif: require('../assets/AccessibilityGif.gif'),
	inclusiveDesignToolkit: require('../assets/InclusiveDesignToolkit.png'),
	globalization: require('../assets/Globalization.jpg'),
	stylingWithoutStyling: require('../assets/stylingWithoutStyling.png'),
	programmer: require('../assets/programmer.jpg'),
	daenerys: require('../assets/daenerys-targaryen.jpg'),
	JenniferVan: require('../assets/JenniferVan.jpg'),
	cssInJs: require('../assets/distracted-girlfriend.jpg'),
	playground: require('../assets/playground.png'),
	firstRuleOfAria: require('../assets/first-rule-of-aria.png'),
	samuelSmiles: require('../assets/Samuel_Smiles_by_Sir_George_Reid.jpg'),
	brickBg: require('../assets/backgrounds/brickBg.jpg'),
	wheelchair: require('../assets/backgrounds/access-wheelchair.jpg'),
	mistakes: require('../assets/backgrounds/mistakes.jpg'),
	mistakesBlurred: require('../assets/backgrounds/mistakesBlurred.png'),
	success: require('../assets/backgrounds/success.jpg'),
	discoverableComponents: require('../assets/discoverableComponents.png'),
	JenDevDesk: require('../assets/aboutme/JensDesk.jpg'),
	DamianConway: require('../assets/DamianConway.jpeg'),
	GoodQuestions: require('../assets/good-questions.jpeg'),
	CPDrivenDev: require('../assets/copy-paste-driven-development.png'),
	CopyPaste: require('../assets/copying_and_pasting.jpg'),
	Library: require('../assets/library-at-trinity-college.jpg')
};

preloader(images);

const themeColors = {
	primary: '#FAFAFA',
	secondary: '#191919',
	tertiary: '#981804',
	dktertiary: 'deepskyblue',
	quartenary: '#FAFAFA',
	faded: '#CCCCCC',
	background: 'linear-gradient(#F8FAFA, #D8DADA)',
};

const theme = createTheme(themeColors, {
	primary: 'Raleway',
});



const styles = {
	li: {
		margin: '40px 0 0 0',
		lineHeight: '2em',
	},
	liLargeText: {
		fontSize: '1.5em',
		fontWeight: 'bold',
	},
	flexCol: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%',
	},
	spacePlease: {
		padding: '60px 0',
	},
	standardText: {
		fontSize: '3rem',
		lineHeight: '3.4rem',
		textShadow: '1px 1px' + ' 6px #111',
	},
	smallText: {
		fontSize: '2rem',
		lineHeight: '2.4rem',
		textShadow: '1px 1px' + ' 4px #111',
	},
	bulletLinks: {
		lineHeight: '1.6em',
		marginBottom: 4,
	},
	accessibilityLinks: {
		fontSize: '1.2em',
		lineHeight: '1.2em',
		padding: '12px 0px',
	},
	
	triangleTopleft: {
		width: 0,
		height: 0,
		borderTop: '60vh solid deepskyblue',
		borderRight: '60vw solid transparent',
	},

	triangleBottomRight: {
		width: 0,
		height: 0,
		borderBottom: '60vh solid white',
		borderLeft: '60vw solid transparent',
		marginTop: '-59vh'
	},
};

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['fade']}
				transitionDuration={100}
				theme={theme}

			>

				{/* Title Screen */}
				<Slide
					bgColor="faded"
					bgImage={images.JenDevDesk}
					bgDarken={0.8}
				>
					<Notes>
						As speakers, we do our best, but sometimes slides are
						just too difficult to read. You can follow along at
						styling-react-for-reuse.surge.sh
					</Notes>
					<Layout style={styles.flexCol}>
						<Fill style={styles.spacePlease}>
							<Heading
								caps
								size={2}
								textColor="primary"
								style={{ textShadow: '1px 1px' + ' 6px #111' }}
							>
								Styling React for Reuse
							</Heading>
							<Heading
								margin="10px 0 0"
								textColor="dktertiary"
								size={3}
								bold
								style={{ textShadow: '1px 1px' + ' 6px #111' }}
							>
								exploring reusability
							</Heading>
						</Fill>
						<Layout style={styles.spacePlease}>
          <Fill style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center"

          }}
          >
            <Text
              textColor="primary"
              style={[styles.smallText, { padding: 0 }]}
            >Follow along with the slides:</Text>
            <Link
              textColor="dktertiary"
              style={[styles.smallText, { textDecoration: "underline" }]}
              href="http://a11y-sprint-filler.surge.sh"
            >http://styling-react-for-reuse.surge.sh</Link>
            {/* <br />
            <Link
              textColor="dktertiary"
              style={styles.smallText}
              href="https://youtu.be/1H8TO1fVuLY"
            >
              Video is available on YouTube:
              https://youtu.be/1H8TO1fVuLY
            </Link> */}
          </Fill>
        </Layout>
					</Layout>
				</Slide>

				{/* Jen Luker Intro */}
				<AboutMe />
				<Formidable />

				<Slide fit bgImage={images.brickBg} bgDarken={0.7}>
					<Notes>
						I propose that in order to say a component is reusable,
						it must also be accessible. In this day and age, we know
						to add these features, and the last thing we want to do
						is perpetuate code that doesn't have accessibility
						features built in.
					</Notes>
					<Heading textColor="primary" caps fit>
						What makes a component reusable?
					</Heading>
					<hr />
					<List style={{ textAlign: 'left' }}>
						<ListItem
							textColor="dktertiary"
							style={{
								fontSize: '2em',
								marginBottom: 20,
								fontWeight: 'bold',
							}}
						>
							Accessibility
						</ListItem>
						<ListItem
							textColor="primary"
							style={{ fontSize: '2em', marginBottom: 20 }}
						>
							Encapsulated, but not isolated
						</ListItem>
						<ListItem
							textColor="primary"
							style={{ fontSize: '2em', marginBottom: 20 }}
						>
							Brandable
						</ListItem>
						<ListItem
							textColor="primary"
							style={{ fontSize: '2em', marginBottom: 20 }}
						>
							Documentation
						</ListItem>
					</List>
				</Slide>

				{/* A11y Slides */}
				<A11yIntro />
				<Why />
				<WhyBusiness1 />
				<WhyBusiness2 />
				<WhyBusiness3 />
				<A11yResources />

				<Slide fit bgImage={images.brickBg} bgDarken={0.7}>
					<Notes>
						Isolated but not too isolated
					</Notes>
					<Heading textColor="primary" caps fit>
						What makes a component reusable?
					</Heading>
					<hr />
					<List style={{ textAlign: 'left' }}>
						<ListItem
							textColor="primary"
							style={{
								fontSize: '2em',
								marginBottom: 20
							}}
						>
							Accessibility
						</ListItem>
						<ListItem
							textColor="dktertiary"
							style={{ fontSize: '2em', marginBottom: 20, fontWeight: 'bold' }}
						>
							Encapsulated, but not isolated
						</ListItem>
						<ListItem
							textColor="primary"
							style={{ fontSize: '2em', marginBottom: 20 }}
						>
							Brandable
						</ListItem>
						<ListItem
							textColor="primary"
							style={{ fontSize: '2em', marginBottom: 20 }}
						>
							Documentation
						</ListItem>
					</List>
				</Slide>


				{/* Grouce Github Image */}
				<Slide bgColor="secondary" notes="">
					<Notes>
						<ul>
							<li>
								Company decided to break up one mega-product
								into smaller, componentized products.
							</li>
							<li>
								This diagram is a visual representation of our
								codebase committed to Git around that time.
							</li>
							<li>
								Each dot is an individual file, and the little,
								tiny structure inside the yellow hexagram is our
								API.When I say we just wanted a little
								consistency; not another framework, This is why:
							</li>
							<li>
								We were a PHP shop with Zend Framework, jQuery -
								ui development bundle, and an aging, custom -
								built, CMS.We had a whole lot of infrastructure
								to support an equally large amount of
								information; all of which was being funneled
								through a very small api.We figured good ole’
								javascript and php would be good enough for us.
							</li>
						</ul>
					</Notes>
					<Layout style={{ display: 'block' }}>
						<Fill
							style={{
								width: '100%',
								height: '790px',
								position: 'relative',
								marginTop: 0,
							}}
						>
							<Text
								textColor="quartenary"
								style={{
									fontSize: '2.6rem',
									position: 'absolute',
									top: 0,
									left: 80,
									zIndex: 4,
								}}
							>
								Committed to Github<br />
								December 2015
							</Text>
							<Image
								src={images.github1}
								style={{
									height: 'auto',
									width: '100%',
									position: 'absolute',
									top: 100,
									left: 0,
									margin: 0,
									zIndex: 1,
								}}
							/>
							<Appear>
								<Image
									src={images.github2}
									style={{
										height: 'auto',
										width: '100%',
										position: 'absolute',
										top: 100,
										left: 0,
										margin: 0,
										zIndex: 2,
									}}
								/>
							</Appear>
							<Appear>
								<Image
									src={images.github3}
									style={{
										height: 'auto',
									width: '100%',
										position: 'absolute',
										top: 100,
										left: 0,
										margin: 0,
										zIndex: 3,
									}}
								/>
							</Appear>
						</Fill>
					</Layout>
					<Text
						style={{ fontSize: '2.6rem', margin: '-30px 0 30px 0' }}
						textColor="quartenary"
					>
						We just wanted a little consistency; not another
						framework.
					</Text>
				</Slide>


				<Slide bgImage={images.mhpNuke}>
					<Notes>
						<p>
							We named our new component-building team the
							MANHATTAN HARDCORE PROJECT (because we were going to
							make Atomic Components, hehe).
						</p>
						<p>
							As soon as we started coding, the lessons started
							piling in. Clearly, failure was going to be our path
							to success.
						</p>
					</Notes>
				</Slide>

				{/* React Week */}
				<Slide bgImage={images.reactWeek} bgDarken={0.2}>
					<Notes>
						So we took those lessons, got a little training, and
						tried again, this time, with a front-end dev on each
						team.
					</Notes>
					<Heading
						textColor="primary"
						fit
						caps
						style={{
							marginTop: -230,
							padding: '4px 20px 0 20px',
							background: 'rgba(0, 0, 0, 0.5)',
						}}
					>
						React Week
					</Heading>
					<Fill>
						<Text
							textColor="primary"
							style={{
								fontSize: '1.0em',
								textShadow: '1px 1px' + ' 6px #111',
								fontWeight: 'bold',
								marginLeft: '-170px',
								paddingTop: 350,
							}}
						>
							It's me!
						</Text>
					</Fill>
				</Slide>


				{/* The Ugly: Just the Header */}
				<Slide
					bgImage={images.mistakesBlurred}
					bgDarken={0.65}
					bgColor="primary"
					style={{ transform: 'scale(0)' }}
				>
					<Notes>
						It turns out our header included
						<ul>
							<li>dropdown menus</li>
							<li>responsive hamburger menus</li>
							<li>modals</li>
							<li>dynamic login detection</li>
							<li>dynamic menu resizing on scroll</li>
							<li>wather modules with geolocation</li>
							<li>icon fonts</li>
							<li>search bar</li>
						</ul>
						<p>
							It was huge, required jQuery, and came with a whole
							host of webpack/bower/gulp build process complexity
							that none of us knew anything about.
						</p>
						We decided that instead of making one isolated package,
						we would require each component to be included on each
						page so that the resources could be reused without
						bringing in duplicate versions of those components.
					</Notes>
					<Layout>
						<Fill
							style={{
								textAlign: 'left',
								width: '60%',
								flex: '1 1 60%',
							}}
						>
							<CodePane
								lang="js"
								source={require('raw-loader!../assets/code/header.example')}
								margin="0px auto"
								textSize="0.8rem"
							/>
						</Fill>
						<Fill
							style={{
								textAlign: 'left',
								width: '39%',
								flex: '1 1 39%',
								marginLeft: '1%',
							}}
						>
							<CodePane
								lang="js"
								source={require('raw-loader!../assets/code/header2.example')}
								margin="0px auto"
								textSize="0.8rem"
							/>
						</Fill>
					</Layout>
					<Heading
						margin="60px auto 0px auto"
						textColor="primary"
						size={4}
						style={{ fontWeight: 'normal' }}
					>
						"Just the header," we said
					</Heading>
				</Slide>

				{/* Important Rabbits */}
				<Slide bgColor="faded" notes="">
					<Notes>
						This time, we didn't isolate enough. Pages that only
						needed the header had included every resource, and if we
						decided to make a modification to the css of any of
						those resources, we had to use !important tags. This led
						to a LOT of !important tags.
					</Notes>
					<Layout style={{ display: 'inline-block' }}>
						<Fill>
							<Image
								src={images.importantRabbits}
								style={{ maxHeight: '75vh', margin: '0 auto' }}
							/>
						</Fill>
					</Layout>
				</Slide>

				<Slide bgImage={images.success} bgDarken={0.7}>
					<Notes />
					<Layout style={{ flexDirection: 'column' }}>
						<Fill>
							<Heading
								size={4}
								textColor="primary"
								style={{
									paddingBottom: 20,
									textShadow: '1px 1px' + ' 6px #111',
									textAlign: 'left'
								}}
							>
								Encapsulated,
							</Heading>
							<Heading
								size={5}
								textColor="dktertiary"
								style={{
									paddingBottom: 20,
									textShadow: '1px 1px' + ' 6px #111',
									textAlign: 'left'
								}}
							>
								Component should be a<br />
								complete, dist package
							</Heading>
						</Fill>
						
						<Fill>
							<Heading
								size={4}
								textColor="primary"
								style={{
									paddingBottom: 20,
									textShadow: '1px 1px' + ' 6px #111',
									textAlign: 'right'
								}}
							>
								but not Isolated
							</Heading>
							<Heading
								size={5}
								textColor="dktertiary"
								style={{
									paddingBottom: 20,
									textShadow: '1px 1px' + ' 6px #111',
									textAlign: 'right'
								}}
							>
								Users need to adapt your<br />
								component to suit their needs
							</Heading>
						</Fill>
					</Layout>
				</Slide>

				<Slide fit bgImage={images.brickBg} bgDarken={0.7}>
					<Notes>
						Making a component match the company brand specs.
					</Notes>
					<Heading textColor="primary" caps fit>
						What makes a component reusable?
					</Heading>
					<hr />
					<List style={{ textAlign: 'left' }}>
						<ListItem
							textColor="primary"
							style={{
								fontSize: '2em',
								marginBottom: 20
							}}
						>
							Accessibility
						</ListItem>
						<ListItem
							textColor="primary"
							style={{ fontSize: '2em', marginBottom: 20 }}
						>
							Encapsulated, but not isolated
						</ListItem>
						<ListItem
							textColor="dktertiary"
							style={{ fontSize: '2em', marginBottom: 20, fontWeight: 'bold' }}
						>
							Brandable
						</ListItem>
						<ListItem
							textColor="primary"
							style={{ fontSize: '2em', marginBottom: 20 }}
						>
							Documentation
						</ListItem>
					</List>
				</Slide>

				<Slide
					fit
					bgImage={images.brickBg}
					bgDarken={0.7}
					notes="This is an interesting question"
				>
					<Notes>
						I asked the twitterverse for what reusable means to
						them, and what they'd like to learn. I got some
						interesting responses, but this one really struck me.
					</Notes>
					
					<Image
						src={images.stylingWithoutStyling}
						style={{ width: '100%', marginTop: 40 }}
					/>
				</Slide>

				<Slide
					fit
					bgImage={images.cssInJs}
					bgDarken={0.0}
					style={{ position: 'relative', height: '100%' }}
					notes="Oh right. That's why."
				>
					<Notes>It made me think </Notes>
				</Slide>


				<Slide fit bgImage={images.brickBg} bgDarken={0.7}>
					<Notes>
						<p>
							If you are looking to compare the different
							CSS-in-JS libraries, the css-in-js playground is a
							fantastic resource.
						</p>
					</Notes>
					<Heading textColor="primary" fit caps>
						Comparing CSS-in-JS Libraries
					</Heading>
					<Image
						src={images.playground}
						style={{
							maxHeight: 'auto',
							maxWidth: '60vw',
							margin: 40,
							boxShadow: '0px 0px' + ' 20px #444',
						}}
					/>
					<Text textColor="primary">
						<a
							style={{ color: themeColors.dktertiary }}
							href="https://css-in-js-playground.com"
						>
							css-in-js-playground.com
						</a>{' '}
						by{' '}
						<a
							style={{ color: themeColors.dktertiary }}
							href="https://twitter.com/SchauDustin"
						>
							@SchauDustin
						</a>
					</Text>
				</Slide>

				<Slide
					fit
					bgImage={images.brickBg}
					bgDarken={0.7}
					style={{ position: 'relative', height: '100%' }}
				>
					<Heading textColor="dktertiary" fit caps>
						If overrides are documented,
					</Heading>
					<Heading textColor="dktertiary" fit caps>
						
					</Heading>
					<Heading
						textColor="primary"
						fit
						caps
						style={{ paddingBottom: 2 }}
					>
						It doesn't matter
					</Heading>
					
				</Slide>

				<Slide
					fit
					bgImage={images.brickBg}
					bgDarken={0.7}
					style={{ position: 'relative', height: '100%' }}
				>
					<Notes>
						Everytime I visit this site, there are more.
					</Notes>

					<Heading textColor="dktertiary" caps fit>
						Ways to override component CSS
					</Heading>
					<hr />
						<List
							textColor="primary"
							style={{fontSize: '2em', margin: '15px'}}
						>
							className or style Prop
						</List>

						<List
							textColor="primary"
							style={{fontSize: '2em', margin: '15px'}}
						>
							Composition
						</List>

						<List
							textColor="primary"
							style={{fontSize: '2em', margin: '15px'}}
						>
							withTheme/ThemeProvider
						</List>
					
				</Slide>

				<Slide fit bgImage={images.brickBg} bgDarken={0.7}>
					<Notes>
						Did you know you can use composition with CSS Modules?
					</Notes>
					<Heading
								textColor="primary"
								style={{ paddingBottom: '5px' }}
								fit
							>
								Composition with CSS Modules
							</Heading>
					<CodePane
						lang="css"
						source={require('raw-loader!../assets/code/composition-cssModules.example')}
						margin="0px auto"
						textSize="0.8em"
					/>
				</Slide>

				<Slide fit bgImage={images.brickBg} bgDarken={0.7}>
					<Notes>
						How not to name things
					</Notes>

					<CodePane
						lang="scss"
						source={require('raw-loader!../assets/code/badCssVars.example')}
						margin="0px auto"
						textSize="1em"
					/>
				</Slide>

				<Slide fit bgImage={images.brickBg} bgDarken={0.7}>
					<Notes>
						Much better way of controlling variables
					</Notes>
					
					<CodePane
						lang="scss"
						source={require('raw-loader!../assets/code/goodCssVars.example')}
						margin="0px auto"
						textSize="0.8em"
					/>
				</Slide>

				<Slide fit bgImage={images.brickBg} bgDarken={0.7}>
					<Heading size="4" textColor="primary">
						Global styles are included in page head for website branding
					</Heading>
					<hr />
					<Heading size="4" textColor="dktertiary">
						Component styles are imported into encapsulated components
					</Heading>
				</Slide>


				{/* DOCUMENTATION BONUS CHAPTER */}

				<Slide fit bgImage={images.brickBg} bgDarken={0.7}>
					<Notes>
						Making a component match the company brand specs.
					</Notes>
					<Heading textColor="primary" caps fit>
						What makes a component reusable?
					</Heading>
					<hr />
					<List style={{ textAlign: 'left' }}>
						<ListItem
							textColor="primary"
							style={{
								fontSize: '2em',
								marginBottom: 20
							}}
						>
							Accessibility
						</ListItem>
						<ListItem
							textColor="primary"
							style={{ fontSize: '2em', marginBottom: 20 }}
						>
							Encapsulated, but not isolated
						</ListItem>
						<ListItem
							textColor="primary"
							style={{ fontSize: '2em', marginBottom: 20 }}
						>
							Brandable
						</ListItem>
						<ListItem
							textColor="dktertiary"
							style={{ fontSize: '2em', marginBottom: 20, fontWeight: 'bold' }}
						>
							Documentation
						</ListItem>
					</List>
				</Slide>



				<Slide fit bgImage={images.Library} bgDarken={0.7}>
					<Notes>
						<p>
							Damian Conway said, "Documentation is a love letter
							you write to your future self."
						</p>
						<p>
							In a month, or even a week from now, you'll have moved onto other projects. 
							You'll barely remember what this component does. 
						</p>
					</Notes>
					<Layout style={{ marginTop: -80 }}>
						<Fill
							style={{
								flex: '1 1 38%',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Image
								src={images.DamianConway}
								style={{
									width: 340,
									height: 350,
									borderRadius: '50%',
									marginTop: -50,
									marginRight: 20,
									boxShadow: '0px 0px' + ' 20px #222',
								}}
							/>
						</Fill>
						<Fill
							style={{
								flex: '1 1 62%',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<BlockQuote>
								<Quote style={{ fontSize: '4.4rem'}}>
									Documentation is a love letter you write to
									your future self.
								</Quote>
								<Cite textColor="dktertiary">
									Damian Conway
								</Cite>
							</BlockQuote>
						</Fill>
					</Layout>
				</Slide>

				<Slide fit bgImage={images.Library} bgDarken={0.7}>
					<Notes>
						
					</Notes>
					<Heading textColor="primary" style={{lineHeight: '1.2em'}}>What if you wrote documentation for your past self?</Heading>
				</Slide>

				<Slide fit bgImage={images.Library} bgDarken={0.7}>
					<Heading textColor="primary" style={{lineHeight: '1.2em'}}>How most of us evolved as programmers:</Heading>
				</Slide>

				<Slide fit bgImage={images.Library} bgDarken={0.7}>
					<Layout style={{justifyContent: 'space-between'}}>
						<Link href="https://www.reddit.com/r/orlybooks/comments/4htnwb/copy_paste_driven_development/">
							<Image style={{height: '80vh', width: 'auto'}} src={images.CPDrivenDev}/>
						</Link>
						<Link href="https://effectivesoftwaredesign.com/2016/05/22/copy-and-paste-programming/">
							<Image style={{height: '80vh', width: 'auto'}} src={images.CopyPaste}/>
						</Link>
					</Layout>
				</Slide>

				<Slide fit bgImage={images.Library} bgDarken={0.7}>
					<Notes>
						You wrote it and you can't remember all the details. 
						You can't expect your users to intuitively know it. If
						you don't tell your users how to use your component,
						they'll think it's bad, regardless of its actual quality.
					</Notes>
					<Heading size="3" textColor="primary" style={{lineHeight: '1.2em'}}>
						What if every available parameter, marked with `required` or `optional` was in your example?
					</Heading>
				</Slide>


				<Slide fit bgImage={images.Library} bgDarken={0.7}>
					<Notes>
							If you write in best practices, including accessibility, into every example you put online, 
							into documentation, and into your live code, we will all spend less time fixing what others 
							(including ourselves) have forgotten, or failed to realize they needed to include. 
							By helping others, we help ourselves, and our future tech debt. 
					</Notes>
					<Heading size="3" textColor="dktertiary">
						What if every code example was accessible?
					</Heading>
					<hr />
					<Heading size="4" textColor="primary">
						Accessibility would be standard because "that's how it works."
					</Heading>
				</Slide>


				<Slide fit bgImage={images.Library} bgDarken={0.7}>
					<Notes>
						<p>
							Damian Conway said, "Documentation is a love letter
							you write to your future self."
						</p>
						<p>
							Now that you've written the documentation you wish you'd had: it's both accessible, 
							and easy to identify all the possible parameters, Let's look at this quote again.

							Imagine all the tech debt you won't have in the future because everyone that came after you 
							copied and pasted those code examples.
						</p>
					</Notes>
					<Layout style={{ marginTop: -80 }}>
						<Fill
							style={{
								flex: '1 1 38%',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Image
								src={images.DamianConway}
								style={{
									width: 340,
									height: 350,
									borderRadius: '50%',
									marginTop: -50,
									marginRight: 20,
									boxShadow: '0px 0px' + ' 20px #222',
								}}
							/>
						</Fill>
						<Fill
							style={{
								flex: '1 1 62%',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<BlockQuote>
								<Quote style={{ fontSize: '4.4rem'}}>
									Documentation is a love letter you write to
									your future self.
								</Quote>
								<Cite textColor="dktertiary">
									Damian Conway
								</Cite>
							</BlockQuote>
						</Fill>
					</Layout>
				</Slide>

				{/* Be Kind */}
				<Slide>
					<Notes>
						Above all, remember that everyone you know is fighting
						Javascript. Let's do what we can to make it a little
						easier for everyone. Thank you.
					</Notes>
					<Layout style={{ display: 'block' }}>
						<Fill
							style={{
								width: '100%',
								height: '100%',
								position: 'relative',
							}}
						>
							<Image
								src={images.beKind}
								style={{
									maxWidth: '60vw',
									maxHeight: '60vh',
									width: 'auto',
									margin: '0 auto',
								}}
							/>
						</Fill>
					</Layout>
				</Slide>
			</Deck>
		);
	}
}
