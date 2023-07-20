function maxWater(height, n) {
  let maximum = 0;

  // Check all possible pairs of buildings
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        if(height[i] && height[j] > 0 && height[j]-height[i]>0){
            let current = Math.min(height[i], height[j]) * (j - i - 1);
            // maximum = Math.max(maximum, current);
            maximum = maximum + current;            
        }        
    }    
  }
  return maximum;
}

// Driver program

// let height = [2, 1, 3, 4, 6, 5];
let height = [0,4,0,0,0,6,0,6,4,0];
let n = height.length;
console.log(maxWater(height, n));
