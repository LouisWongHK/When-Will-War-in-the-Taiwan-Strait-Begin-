function getRandomFactor() {
    return Math.random() * (1.2 - 0.8) + 0.8;
}

function calculateWarLikelihood(us_china_power_balance, regime_stability, nationalism_pressure,
                                information_distortion, escalation_control, paranoia_level, distortion_factor) {
    let adjusted_power_balance = us_china_power_balance * paranoia_level;
    let adjusted_regime_stability = regime_stability * paranoia_level;
    let adjusted_information_distortion = information_distortion * distortion_factor;
    let adjusted_escalation_control = escalation_control * paranoia_level;

    let likelihood_of_war = (adjusted_power_balance * 0.3 +
                             adjusted_regime_stability * 0.4 +
                             nationalism_pressure * 0.1 +
                             adjusted_information_distortion * 0.2 +
                             adjusted_escalation_control * 0.1);

    return Math.max(1, Math.min(10, likelihood_of_war));
}

function simulate() {
    let us_china_power_balance = parseInt(document.getElementById("usChinaPowerBalance").value);
    let regime_stability = parseInt(document.getElementById("regimeStability").value);
    let nationalism_pressure = parseInt(document.getElementById("nationalismPressure").value);
    let information_distortion = parseInt(document.getElementById("informationDistortion").value);
    let escalation_control = parseInt(document.getElementById("escalationControl").value);

    let paranoia_level = getRandomFactor();
    let distortion_factor = getRandomFactor();

    let war_likelihood = calculateWarLikelihood(
        us_china_power_balance,
        regime_stability,
        nationalism_pressure,
        information_distortion,
        escalation_control,
        paranoia_level,
        distortion_factor
    );

    let resultText = "";
    if (war_likelihood > 7) {
        resultText = "Xi Jinping sees the opportunity and decides to take military action.";
    } else if (war_likelihood > 4) {
        resultText = "Xi Jinping hesitates and chooses to observe the situation further.";
    } else {
        resultText = "Xi Jinping sees the risks as too high and decides not to act militarily.";
    }

    document.getElementById("result").textContent = `${resultText} (Likelihood of War: ${war_likelihood.toFixed(2)})`;
}

document.querySelectorAll('input[type="range"]').forEach(input => {
    input.addEventListener('input', event => {
        document.getElementById(event.target.id + 'Value').textContent = event.target.value;
    });
});
