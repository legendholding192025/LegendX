import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      countryCode,
      phoneNumber,
      productOfInterest,
      serviceType,
      message
    } = body;

    // Validate required fields
    if (!fullName || !email || !phoneNumber || !productOfInterest || !serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Insert contact submission into database
    const { data, error } = await supabase
      .from('legendx_contact_submissions')
      .insert([
        {
          full_name: fullName,
          email,
          country_code: countryCode,
          phone_number: phoneNumber,
          product_of_interest: productOfInterest,
          service_type: serviceType,
          message: message || null,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        data 
      },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 