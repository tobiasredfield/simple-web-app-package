console.log("Package v1.0.1 loading - Added validation.");



const settings = { mode: 'A', threshold: null };

function validateSettings(config) {
     console.log("Validating settings...");
     if (config.threshold === null || typeof config.threshold === 'undefined') {
         throw new Error("FATAL: Invalid setting 'threshold' in v1.0.1 configuration.");
     }
     if (config.mode !== 'A' && config.mode !== 'B') {
         throw new Error("FATAL: Invalid setting 'mode' in v1.0.1 configuration.");
     }
     return true;
}

validateSettings(settings);


module.exports = {
    validate: validateSettings,
    version: "1.0.1"
};
