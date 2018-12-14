import React, { Component } from 'react'
import '../components/css_pages/lyrics.css'
import Layout from '../components/layout'

class Lyrics extends Component {
    hideHandler = e => {
        const element = document.getElementById(e.target.id)
        if(element===null){return}else{
        const html = element.children
        const arr = Array.from(html)
        const lyrics = arr[0]
        lyrics.classList.toggle("hide")
        }
    }

    render(){
    return (
        <div className="App">
        <Layout />
        <div id="lyricsInfo">
            <div id="songs">
            <p>
                The lyrics for "Bold" are in track order below:
            </p>
                
            <div id="fact" onClick={this.hideHandler}>
                Fact Without a Feeling

                <div className="song hide" id="factwithout">
                <p>Rising waters, do your thing</p>
                <p>Take this boat that I am in</p>
                <p>Whisk me to the big ocean</p>
                <p>My little city's little sins</p>
                <p>Are adding up to equal "get me out"</p>
                <p>So river, rise up, quick and loud</p>
                <p>Cause he has found a new lover</p>
                <p>And at their wedding, I cried in my car.</p>
                    <div></div>
                <p>Because I can see they were meant to be
                But then who was I?</p>
                <p>As they placed their rings
                In the back I think
                I had caught his eye</p>
                <p>When his face showed nothing I heard</p>
                    <div></div>
                <p>"Time, he is a friend. He's meant for healing."</p>
                <p>I can't wait til this a fact without a feeling </p>
                <p></p>
                <p>Wishing for a bigger wave,</p>
                <p>I tell the water I am brave</p>
                <p>"Hey I can handle what you think I can't"</p>
                <p>"So whip me on with windy hands"</p>
                <p>But I hear "Wiser is the name of Us."</p>
                <p>"You ask for what do not trust"</p>
                <p>"So take a clock and take a seat"</p>
                <p>"And feel the wood beneath your weary feet"</p>
                    <div></div>
                <p>I can see they were meant to be
                But then who was I?</p>
                <p>As they place their rings
                I sit back and think "What a solid guy"</p>
                <p>But just not mine</p>
                    <div></div>
                <p>Oh, time, he is a friend, he's meant for healing</p>
                <p>I can't wait til this is a fact without a feeling</p>
                </div>
            </div>

            <div id="cant" onClick={this.hideHandler}>
                Can't Breathe

                <div className="song hide" id="cantbreathe">
                <p>I feel, I feel like such
                An Ifeeltoomuch</p>
                <p>I kill, I kill the love
                With Imrealtoomuch</p>
                <p>When I write, I write the songs
                That reveal too much</p>
                <p>When I lead, mislead with words
                To conceal my thoughts</p>
                <p>But I know no cap and that is a risky thing</p>
                <p>I blow the top up off of your ceiling</p>
                <p>This needs more complicate than needs compromise</p>
                <p>I drink two drinks to get to the hazy eyes
                So I can't feel wise, instead:</p>
                    <div></div>
                <p>Free.</p> 
                <p>The one thing that I beg to be</p>
                <p>I'm bound to the ground with the rules that surround
                Using doors under steeples each week</p>
                <p>Again with the big revelation</p>
                <p>But these words are my latest salvation</p>
                <p>I feel that my heart has been taken by Justsayyes
                I can't breathe</p>
                <p>So I leave to rediscover me</p>
                    <div></div>
                <p>I sense, I sense a sense
                Of uncertainty</p>
                <p>I think a fraud is what they are 
                Naming me</p>
                <p>Alert, alert, a red alert
                Sirens ring, 'cause if you</p>
                <p>All heard my mind I know you'd
                Be questioning
                But let me remain fully</p>
                    <div></div>
                <p>Free,</p>
                <p>the one thing that I beg to be</p>
                <p>I'm bound to the ground with the rules that surround
                Using doors under steeples each week</p>
                <p>Finally, my faith is firm</p>
                <p>The force of a fist had to be unlearned</p>
                <p>I feel that the chokehold of Blessedorburned's an ironic curse
                I can't breathe</p>
                <p>So I leave to rediscover me</p>
                    <div></div>
                <p>We mandate all these things that we wrote ourselves</p>
                <p>The kids my age are done with this holy hell</p>
                <p>We don't conform for simply conforming's sake</p>
                <p>We're challenging a culture of Hidemistakes
                We all bend and break from it</p>
                    <div></div>
                <p>Free:</p>
                <p>It's the one thing that we beg to be</p>
                <p>We're bound to the ground with the rules that surround
                Using doors under steeples each week</p>
                <p>I know it's a tough revelation
                But really, someone had to say it</p>
                <p>The exit is not of the wasted, we're just saying
                "I can't breathe"
                "So I leave to rediscover me."</p>
                </div>
            </div>

            <div id="sudden" onClick={this.hideHandler}>
                Sudden Stop
                
                <div className="song hide" id="suddenstop">
                <p>I am dark dark dark</p>
                <p>Drown it out with alcohol</p>
                <p>Give a cocktail a fun name</p>
                <p>Make it feel like it’s not a form of a fall</p>
                    <div></div>
                <p>I wrap up like a speaker who’s anxious</p>
                <p>Eager to end this</p>
                <p>Tell the truth, then go back to pretending</p>
                <p>I’ll get dark dark dark</p>
                <p>And fake this figure for you all</p>
                    <div></div>
                <p>I will feel this out</p>
                <p>Run my hand along the cloth</p>
                <p>Make a snag with a sharp nail</p>
                <p>Forget I was the force of the flaw</p>
                <p>I laugh about it to ease the anxious</p>
                <p>But I’ll defend it</p>
                <p>Self-destructive habits just happen</p>
                <p>I will come crashing down</p>
                <p>Become a shell of who I was.</p>
                    <div></div>
                <p>Everybody can see
                This is not the real me, 
                But I’ll just keep showing off</p>
                <p>Naked body, painted
                They will call me a sin
                But I’ll just keep yelling “wrong”</p>
                <p>I’m projecting a scene
                Where I’m flawless and free
                But inside I’m an empty cup</p>
                <p>Step in closer and lean
                I can feel an ending
                In the form of a sudden stop
                coming up</p>
                    <div></div>
                <p>There’s a sudden stop coming up</p>
                <p>Ignore the truth long enough
                There’s a sudden stop coming up</p>
                    <div></div>
                <p>There’s a light light light
                Flickering inside my mind</p>
                <p>I could tighten the bulb but
                I simply flip the switch and resign to night</p>
                <p>I hear Your voice off in the distance</p>
                <p>But my resistance</p>
                <p>Is stronger than my cry for assistance</p>
                <p>So I’ll just fight fight fight</p>
                <p>And wonder why I feel no love</p>
                    <div></div>
                <p>Everybody can see
                This is not the real me
                But I’ll just keep showing off</p>
                <p>Naked body, painted
                They will call me a sin
                But I’ll just keep yelling “Wrong”</p>
                <p>Off the stage and the screen
                I’m not flawless or free</p>
                <p>I’m the walls of an empty cup, so</p>
                <p>Step in closer and lean
                I can feel an ending</p>
                <p>In the form of a sudden stop
                coming up</p>
                    <div></div>
                <p>There’s a sudden stop coming up</p>
                <p>Ignore the truth long enough
                There’s a sudden stop coming up</p>
                    <div></div>
                <p>I let them all
                Put their fingers on me</p>
                <p>Drag them ‘round
                So they stroke off my lonely</p>
                <p>No
                They cannot feel me breathing
                I move my limbs to keep on deceiving but</p>
                <p>A sudden stop's coming up</p>
                </div>
            </div>

            <div id="j" onClick={this.hideHandler}>
                J is for Jealousy

                <div className="song hide" id="jisfor">
                <p>I've got jealousy
                Dancing up on me</p>
                <p>Maybe I don't fight it off</p>
                <p>Maybe I don't fight it off</p>
                <p>Move into my room
                I watch him intrude</p>
                <p>Telling me to take it off</p>
                <p>To strip away this joy I love</p>
                    <div></div>
                <p>And he says "You're not trying hard enough"</p>
                <p>"Maybe you don't want it bad enough-</p>
                <p>success"</p>
                    <div></div>
                <p>"To your left, to your right"</p>
                <p>"Keeping you up at night: success"</p>
                <p>"To your left to your right"</p>
                <p>"Keeping you up at night: success"</p>
                    <div></div>
                <p>J is for</p>
                <p>J is for</p>
                <p>J is for</p>
                <p>J is for Jealousy
                Up on me</p>
                    <div></div>
                <p>You are not enough</p>
                </div>
            </div>

            <div id="hello" onClick={this.hideHandler}>
                Hello Again

                <div className="song hide" id="helloagain">
                <p>Intense emotion</p>
                <p>Hello again.</p>
                <p>You are my controlling friend
                I don't welcome in</p>
                <p>Intense emotion</p>
                <p>Hello again.</p>
                <p>You are my controlling friend
                I don't welcome in</p>
                    <div></div>
                <p>I saw you pull into my driveway and I said "oh shit"</p>
                <p>Then the deep dread hit
                Like a tidal.</p>
                <p>You keep me in suspense 
                While I drip with sweat</p>
                <p>I did not expect your arrival</p>
                <p>But you're not in a rush
                Watch you text someone</p> 
                <p>From your car while you let it idle</p>
                <p>There's a knock knock and a shout</p>
                <p>You are staying out</p>
                <p>This is not your home
                From inside I go</p>
                    <div></div>
                <p>Intense emotion</p>
                <p>Hello again.</p>
                <p>You are my controlling friend
                I don't welcome in</p>
                <p>This door won't open
                I'm locking it.</p> 
                <p>You are a controlling friend
                Those aren't welcome in.</p>
                    <div></div>
                <p>Oh yeah, I'm finally calling you out</p>
                <p>You're a narcissist;
                naming it, 
                and I don't want you around</p>
                <p>When I host you my house it's all about you.</p>
                <p>And I'm tired of listening to fear, just got much to do.</p>
                </div>
            </div>

            <div id="sinking" onClick={this.hideHandler}>
                Sinking in Sink Water (ft. Simon Smith)

                <div className="song hide" id="sinkinginsink">
                <p>I'm sinking 
                In sink water</p>
                <p>Surrounded by ceramic 
                It's a silly scene for panic</p>
                <p>When my thinking
                Becomes stronger</p>
                <p>I'll cease this doggy paddle
                Knowing this is not my battle anymore</p>
                    <div></div>
                <p>Logic says my feet can touch</p>
                <p>But bottom’s not a safe place, not for me.</p>
                <p>I’m wrestling with this inner rush</p>
                <p>This dread that’s preaching it’s reality</p>
                    <div></div>
                <p>My memories do not make me</p>
                <p>I am not defined by breaking as a child</p>
                <p>Adjusting to an adult life</p>
                <p>Is hard when it is always night inside</p>
                    <div></div>
                <p>Cause I’m sinking in sink water</p>
                <p>And I’m fighting to become stronger</p>
                <p>My racing heart and mind</p>
                <p>Are simply products of adding 
                Trauma plus time.</p> 
                <p>Yeah, my racing heart and mind</p>
                <p>Are simply products of adding 
                Time to trauma</p>
                <p>Oh my racing heart and mind</p>
                <p>Are simply products of adding 
                Trauma plus time.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Lyrics