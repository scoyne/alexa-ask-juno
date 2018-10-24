/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const SKILL_NAME = 'Space Facts';
const GET_FACT_MESSAGE = 'Here\'s your fact: ';
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
  'Many people with disabilities use a service animal in order to fully participate in everyday life. Dogs can be trained to perform many important tasks to assist people with disabilities, such as providing stability for a person who has difficulty walking, picking up items for a person who uses a wheelchair, preventing a child with autism from wandering away, or alerting a person who has hearing loss when someone is approaching from behind.',
  'The Department of Justice continues to receive many questions about how the Americans with Disabilities Act (ADA) applies to service animals. The ADA requires State and local government agencies, businesses, and non-profit organizations (covered entities) that provide goods or services to the public to make "reasonable modifications" in their policies, practices, or procedures when necessary to accommodate people with disabilities. The service animal rules fall under this general principle. Accordingly, entities that have a "no pets" policy generally must modify the policy to allow service animals into their facilities. This publication provides guidance on the ADA\'s service animal provisions and should be read in conjunction with the publication ADA Revised Requirements: Service Animals.',
  'Under the Americans with Disabilities Act, a service animal is defined as a dog that has been individually trained to do work or perform tasks for an individual with a disability.  The task(s) performed by the dog must be directly related to the person\'s disability.',
  'The service animal must be trained to take a specific action when needed to assist the person with a disability. For example, a person with diabetes may have a service animal that is trained to alert a person when their blood sugar reaches high or low levels. A person with depression may have an animal that is trained to remind them to take their medication. Or, a person who has epilepsy may have a service animal that is trained to detect the onset of a seizure and then help the person remain safe during the seizure.',
  'Emotional support, therapy, comfort, or companion animals are terms used to describe animals that provide comfort just by being with a person.  Because they have not been trained to perform a specific job or task, they do not qualify as service animals under the American with Disabilities Act.',
  'Under the Americans with Disabilities Act, service animals must be trained before they can be taken into public places.  However, some State or local laws cover animals that are still in training..',
  'In situations where it is not obvious that the dog is a service animal, business owners or employeers may ask only two specific questions: (1) is the dog a service animal required because of a disability? and (2) what work or task has the dog been trained to perform? business owners are not allowed to request any documentation for the dog, require that the dog demonstrate its task, or inquire about the nature of the person\'s disability..',
  'A guide dog is trained to guide his client in a straight line unless told otherwise, avoiding obstacles on the ground, to both sides and above. The service animal will stop at curbs, stairs, and locate doorways to regularly visited destinations. The service animal should maintain a straight line when crossing a road, but will not decide when it is safe to cross. Making the judgment as to when it is safe to cross a road with a guide dog would be identical to making that judgment when using a white cane. It is the client’s responsibility to decide when and where to cross roads.',
  'Working a guide dog is a partnership that offers a potentially unique, safe and effective way of getting around independently.',
  'Thousands of visually impaired people in all walks of life have found that a service animal brings new freedom and independence. In a world where the pace of life and crowded noisy streets can make getting around difficult and stressful for a person with a visual impairment, a service animal can greatly increase your confidence. A true partnership can develop with the service animal becoming a companion and friend. In addition, many clients find that a service animal is a social asset. People often are interested and curious about service animals and often approach to chat or offer assistance. This can reduce the feeling of isolation which some visually impaired people experience.',
  'Guide dogs are allowed everywhere that the general public is allowed to go.  This includes restaurants, taxi cabs, airplanes, hotels, etcetera.  This right is protected by a federal law called the Americans With Disabilities Act.',
  'The general rule is that working guide dogs should be ignored. Distractions take their concentration away from the work they have to do which can put the dog and its teammate in jeopardy.  Do not pet or feed a guide dog and do not encourage the dog to misbehave.',
  'A guide dog is trained to assist persons with visual impairments.  A service dog or service animal is trained to help those with severe to profound hearing loss by alerting the individual to a variety of sounds or someone with a physical impairment that substantially limits mobility  by assisting in the performance of a wide variety of tasks depending on need and training for example opening doors, retrieving, etcetera.',
  'The average working life for a guide dog dog is 7 - 8 years. Many guide dogs have worked to the ages of 10 or 11.',
  'Labrador Retrievers are currently the most popular breed used for Guide dogs. Most programs use Labrador Retrievers, Golden Retrievers, German Shepherds, or crosses between Golden Retrievers and Labrador Retrievers as guide dog candidates. Some programs use Labradoodles, Boxers, or Chesapeake Bay Retrievers. These breeds are chosen for their intelligence, ability and willingness to work long hours, ability to tolerate stress, good health, and public acceptability or recognition',
  'A guide dog should have rock-solid nerves. The should be calm and confident, obeying even in the midst of chaos. He should not be easily frightened but also should not be ignorant of real danger when it presents itself. Just as you wouldn\'t want a guide dog who trembled at the sight of a passing car, you would not want one who stood happily in the road as one speed straight toward it. In other words, you want a dog with an abundance of good common sense.  A guide dog should be biddable, which means he should have a desire to please his master and to work as a team member, choosing to perform his job out of loyalty even when it is unpleasant and he\'d rather be doing something else (like staying home warm in bed instead of out on the streets in the sleet taking his master to the pharmacy for essential medication). The guide dog should be intelligent and trainable. He should be an excellent problem-solver because it is impossible to predict every possible puzzle a dog might encounter in his working life and he must be able to apply what he knows creatively in new situations to make safe and reasonable decisions. The ability to exhibit "intelligent disobedience" is also prized. A guide dog intelligently disobeys a command to go forward when it would put his master in danger, such as when a car is coming. When the dog refuses the command, it falls to the owner to determine why and then make an informed decision on whether to proceed anyway, wait, or take a different path.',
  'In the year 79 excavations in Pompeii reveal a wall-painting of a blind man apparently being led by his dog.',
  'Please don\'t touch, talk, feed or otherwise distract a service dog while they are wearing their harness or vest. You should allow the dog to concentrate and perform for the safety of his handler.',
  'Don\'t treat the service dog as a pet, while they are wearing their harness or vest, give them the respect of a working dog.',
  'Speak to the handler, not the dog. Some handlers will allow petting, but be sure to ask before doing so. If allowed, don\'t pat the dog on the head; stroke the dog on the shoulder area.',
  'If the service dog handler says no when you ask to pet the dog, don\’t be offended. The dog or handler might be having a bad day, or he might be in a hurry. Remember, a service dog is as vital to a disabled person as a wheelchair or cane. You wouldn\'t ask to pet their wheelchair or get mad if they wouldn\'t let you pet their cane.',
  'You should not give a service dog commands; allow the handler give the commands.',
  'When walking with a guide or service dog team, you should not walk on the dog\'s left side, as it may become distracted or confused. Ask the handler where you should walk. Depending on the situation, they may ask you to walk ahead of them on their right side, or behind them by their right shoulder.',
  'Never attempt to grab or steer the person while the dog is guiding or attempt to hold the dog\'s harness. You should ask if the handler needs your assistance and, if so, offer your left arm.',
  'Never give a service animal table scraps. You should respect the handler\'s need to give the dog a balanced diet, and to maintain its good habits.'
];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
