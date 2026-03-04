import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';

interface SubscribeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const STATE_CITIES: Record<string, string[]> = {
  'Alabama': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa', 'Auburn'],
  'Alaska': ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Wasilla'],
  'Arizona': ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Tempe', 'Peoria', 'Surprise', 'Gilbert'],
  'Arkansas': ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro', 'Rogers'],
  'California': ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento', 'Fresno', 'Oakland', 'Santa Ana', 'Anaheim', 'Riverside', 'Irvine', 'Long Beach', 'Bakersfield', 'Stockton', 'Santa Clarita'],
  'Colorado': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Boulder', 'Lakewood', 'Pueblo', 'Arvada', 'Westminster'],
  'Connecticut': ['Hartford', 'New Haven', 'Stamford', 'Bridgeport', 'Waterbury', 'Norwalk'],
  'Delaware': ['Wilmington', 'Dover', 'Newark', 'Middletown'],
  'Florida': ['Miami', 'Tampa', 'Orlando', 'Jacksonville', 'Fort Lauderdale', 'West Palm Beach', 'Naples', 'Sarasota', 'St. Petersburg', 'Gainesville', 'Tallahassee', 'Boca Raton', 'Fort Myers', 'Pensacola'],
  'Georgia': ['Atlanta', 'Savannah', 'Augusta', 'Columbus', 'Macon', 'Athens', 'Sandy Springs', 'Alpharetta', 'Marietta'],
  'Hawaii': ['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu'],
  'Idaho': ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello', 'Coeur d\'Alene'],
  'Illinois': ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield', 'Peoria', 'Elgin', 'Champaign'],
  'Indiana': ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Fishers', 'Bloomington'],
  'Iowa': ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City', 'Waterloo'],
  'Kansas': ['Wichita', 'Overland Park', 'Kansas City', 'Olathe', 'Topeka', 'Lawrence'],
  'Kentucky': ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington'],
  'Louisiana': ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles'],
  'Maine': ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn'],
  'Maryland': ['Baltimore', 'Columbia', 'Germantown', 'Silver Spring', 'Waldorf', 'Annapolis', 'Frederick', 'Rockville'],
  'Massachusetts': ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton', 'Quincy', 'Newton'],
  'Michigan': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing', 'Flint', 'Dearborn'],
  'Minnesota': ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park'],
  'Mississippi': ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi'],
  'Missouri': ['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence', 'Lee\'s Summit'],
  'Montana': ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Helena'],
  'Nebraska': ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island'],
  'Nevada': ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City'],
  'New Hampshire': ['Manchester', 'Nashua', 'Concord', 'Dover', 'Rochester'],
  'New Jersey': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Woodbridge', 'Trenton', 'Princeton'],
  'New Mexico': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell'],
  'New York': ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany', 'New Rochelle', 'White Plains'],
  'North Carolina': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Cary', 'Wilmington', 'Asheville'],
  'North Dakota': ['Fargo', 'Bismarck', 'Grand Forks', 'Minot'],
  'Ohio': ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Canton', 'Youngstown'],
  'Oklahoma': ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Edmond'],
  'Oregon': ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro', 'Bend', 'Beaverton'],
  'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton', 'Bethlehem', 'Lancaster'],
  'Rhode Island': ['Providence', 'Warwick', 'Cranston', 'Pawtucket'],
  'South Carolina': ['Charleston', 'Columbia', 'North Charleston', 'Mount Pleasant', 'Greenville', 'Myrtle Beach'],
  'South Dakota': ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings'],
  'Tennessee': ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro', 'Franklin'],
  'Texas': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'El Paso', 'Arlington', 'Plano', 'Irving', 'Lubbock', 'Corpus Christi', 'Frisco', 'McKinney', 'The Woodlands'],
  'Utah': ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem', 'Sandy', 'Ogden'],
  'Vermont': ['Burlington', 'South Burlington', 'Rutland', 'Montpelier'],
  'Virginia': ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News', 'Alexandria', 'Arlington', 'Hampton'],
  'Washington': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton'],
  'West Virginia': ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg'],
  'Wisconsin': ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton'],
  'Wyoming': ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs'],
};

const ROLES = ['Agent', 'Broker', 'Team Leader', 'Manager', 'Lender'];

const INTERESTS = [
  'Market trends',
  'AI & tech tools',
  'Marketing',
  'Business growth',
  'Commercial real estate',
  'Finance',
];

const SubscribeModal = ({ open, onOpenChange }: SubscribeModalProps) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInterestToggle = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async () => {
    if (status === 'loading') return;
    setStatus('loading');

    try {
      const { error } = await supabase.functions.invoke('subscribe-beehiiv', {
        body: {
          email,
          firstName,
          city,
          role,
          interests,
        },
      });

      if (error) {
        console.error('Subscribe error:', error);
        setStatus('error');
      } else {
        setStatus('success');
        // Keep modal open to show success message
      }
    } catch (err) {
      console.error('Subscribe exception:', err);
      setStatus('error');
    }
  };

  const handleClose = () => {
    // Reset form when closing
    setTimeout(() => {
      setStep(1);
      setEmail('');
      setFirstName('');
      setState('');
      setCity('');
      setRole('');
      setInterests([]);
      setStatus('idle');
    }, 200);
    onOpenChange(false);
  };

  // Reset city when state changes
  const handleStateChange = (newState: string) => {
    setState(newState);
    setCity(''); // Clear city when state changes
  };

  const canProceedToStep2 = email && email.includes('@');
  const canProceedToStep3 = state && city && role;
  const canSubmit = interests.length > 0;

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] glass-card border-2 border-border p-0 shadow-lift">
        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-1 flex">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 transition-all duration-300 ${
                step >= s ? 'bg-orange' : 'bg-gray-1'
              }`}
            />
          ))}
        </div>

        <div className="p-6">
          {status === 'success' ? (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="text-5xl">🚀</div>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-orange text-center">
                  ✓ You're in the transmission.
                </DialogTitle>
              </DialogHeader>
              <p className="font-body text-sm text-gray-2">
                Your personalized field logs will arrive weekly. Check your inbox for confirmation.
              </p>
              <Button
                onClick={handleClose}
                className="mt-4 bg-orange hover:bg-orange-dark text-primary-foreground font-display"
              >
                Close
              </Button>
            </motion.div>
          ) : (
            /* Form steps */
            <>
              <DialogHeader className="mb-6">
                <DialogTitle className="font-display text-xl text-ink">
                  {step === 1 && 'Welcome to The Assignment'}
                  {step === 2 && 'Tell us about yourself'}
                  {step === 3 && 'What intel do you want?'}
                </DialogTitle>
                <p className="font-mono text-xs text-gray-2 mt-2">
                  Step {step} of 3
                </p>
              </DialogHeader>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={fadeIn}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body text-sm text-ink">
                        Your email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="agent@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-ink font-body"
                        autoFocus
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-body text-sm text-ink">
                        First name <span className="text-gray-2">(helps us say hi properly)</span>
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Sarah"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border-ink font-body"
                      />
                    </div>

                    <Button
                      onClick={() => setStep(2)}
                      disabled={!canProceedToStep2}
                      className="w-full bg-orange hover:bg-orange-dark text-primary-foreground font-display"
                    >
                      Next →
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={fadeIn}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="state" className="font-body text-sm text-ink">
                        What state do you operate in?
                      </Label>
                      <Select value={state} onValueChange={handleStateChange}>
                        <SelectTrigger className="border-ink font-body">
                          <SelectValue placeholder="Select your state..." />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          {Object.keys(STATE_CITIES).sort().map((s) => (
                            <SelectItem key={s} value={s} className="font-body">
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {state && (
                      <div className="space-y-2">
                        <Label htmlFor="city" className="font-body text-sm text-ink">
                          What city do you operate in?
                        </Label>
                        <Select value={city} onValueChange={setCity}>
                          <SelectTrigger className="border-ink font-body">
                            <SelectValue placeholder="Select your metro..." />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            {STATE_CITIES[state].map((c) => (
                              <SelectItem key={c} value={c} className="font-body">
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-2 font-mono">
                          Don't see your city? Select the one closest to you.
                        </p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label className="font-body text-sm text-ink">
                        What's your role?
                      </Label>
                      <RadioGroup value={role} onValueChange={setRole}>
                        {ROLES.map((r) => (
                          <div key={r} className="flex items-center space-x-2">
                            <RadioGroupItem value={r} id={r} className="border-ink" />
                            <Label htmlFor={r} className="font-body text-sm cursor-pointer">
                              {r}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => setStep(1)}
                        variant="outline"
                        className="flex-1 border-ink font-display"
                      >
                        ← Back
                      </Button>
                      <Button
                        onClick={() => setStep(3)}
                        disabled={!canProceedToStep3}
                        className="flex-1 bg-orange hover:bg-orange-dark text-primary-foreground font-display"
                      >
                        Next →
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={fadeIn}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="space-y-3">
                      <Label className="font-body text-sm text-ink">
                        What intel do you want? (select all that apply)
                      </Label>
                      {INTERESTS.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={interests.includes(interest)}
                            onCheckedChange={() => handleInterestToggle(interest)}
                            className="border-ink"
                          />
                          <Label
                            htmlFor={interest}
                            className="font-body text-sm cursor-pointer"
                          >
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>

                    {status === 'error' && (
                      <p className="text-xs text-red-500 font-mono">
                        Something went wrong — try again.
                      </p>
                    )}

                    <div className="flex gap-2">
                      <Button
                        onClick={() => setStep(2)}
                        variant="outline"
                        className="flex-1 border-ink font-display"
                        disabled={status === 'loading'}
                      >
                        ← Back
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        disabled={!canSubmit || status === 'loading'}
                        className="flex-1 bg-orange hover:bg-orange-dark text-primary-foreground font-display"
                      >
                        {status === 'loading' ? 'Sending...' : 'Complete Onboarding'}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeModal;
