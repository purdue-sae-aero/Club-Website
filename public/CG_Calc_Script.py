def calculate_cg():
    print("--- Aircraft CG Calculator ---")
    
    # 1. Gather Weight Inputs
    try:
        W_n = float(input("Enter weight on Nose Gear (kg): "))
        W_ml = float(input("Enter weight on Left Main Gear (kg): "))
        W_mr = float(input("Enter weight on Right Main Gear (kg): "))
        
        # 2. Gather Distance Inputs (Longitudinal from nose)
        x_nput = float(input("Enter distance from nose tip to Nose Gear (m) [Press Enter for default 0.6]: "))
        if x_nput.strip() == "":
            x_n = 0.6  # Default value
        else:
            x_n = float(np_input)

        x_mput = float(input("Enter distance from nose tip to Main Gears (m) [Press Enter for default 1.047]: "))
        if x_mput.strip() == "":
            x_m = 1.047  # Default value
        else:
            x_m = float(np_input)

        # 4. Neutral Point Input (with default)
        np_input = input("Enter Neutral Point distance from nose tip (m) [Press Enter for default 1.15]: ")
        if np_input.strip() == "":
            x_np = 0.737 + 0.413  # Default value
        else:
            x_np = float(np_input)
            
    except ValueError:
        print("Invalid input. Please enter numerical values.")
        return

    # Calculations
    W_total = W_n + W_ml + W_mr
    
    if W_total == 0:
        print("Total weight cannot be zero.")
        return
        
    # Longitudinal CG (x-axis)
    x_cg = (W_n * x_n + (W_ml + W_mr) * x_m) / W_total
        
    # Distance of CG relative to Neutral Point
    cg_to_np = x_np - x_cg

    # Print Results
    print("\n--- Results ---")
    print(f"Total Weight:             {W_total:.2f}")
    print(f"Longitudinal CG (x_cg):   {x_cg:.4f} m from nose tip")  
    print(f"Neutral Point (NP):       {x_np:.4f} m from nose tip")
    print(f"CG Relative to NP:        {cg_to_np:.4f} m ", end="")
    
    if cg_to_np > 0:
        print("(CG is AHEAD of NP - Statically Stable)")
    elif cg_to_np < 0:
        print("(CG is BEHIND of NP - Unstable!)")
    else:
        print("(CG is EXACTLY ON NP - Neutrally Stable)")

# Run the calculator
if __name__ == "__main__":
    calculate_cg()